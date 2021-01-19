import { HttpService, Injectable, Logger } from '@nestjs/common';
import { Observable, forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import {
  Champion,
  ChampionsResponse,
  ChampionsRatesResponse,
} from './models/champion.model';
import { ChampionsArgs } from './dto/champions.args';

@Injectable()
export class ChampionsService {
  private readonly logger = new Logger('ChampionsService');

  constructor(private httpService: HttpService) {}

  findAll({ version, language }: ChampionsArgs): Observable<Champion[]> {
    this.logger.log('Fetching champions data');

    const champions = this.httpService.get<ChampionsResponse>(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion.json`
    );

    const rates = this.httpService.get<ChampionsRatesResponse>(
      `https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/championrates.json`
    );

    return forkJoin([champions, rates]).pipe(
      map(([championsResponse, ratesResponse]) =>
        Object.values(championsResponse.data.data).map(
          (champion) =>
            ({
              id: champion.id,
              name: champion.name,
              tags: champion.tags,
              avatar: `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.id}.png`,
              position: Object.keys(ratesResponse.data.data[champion.key])[0],
              difficulty: champion.info.difficulty,
            } as Champion)
        )
      ),
      tap(
        () => this.logger.log('Successfully fetched champions data'),
        () => this.logger.log('Failed to fetch champions data')
      )
    );
  }
}
