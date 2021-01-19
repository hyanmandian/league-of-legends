import { HttpService, Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import {
  Position,
  Champion,
  RatesResponse,
  ChampionsResponse,
} from './models/champion.model';
import { ChampionsArgs } from './dto/champions.args';

@Injectable()
export class ChampionsService {
  private readonly logger = new Logger('ChampionsService');

  constructor(private httpService: HttpService) {}

  findPosition(id: string): Observable<Position> {
    this.logger.log(`Fetching champion ${id} position`);

    return this.httpService
      .get<RatesResponse>(
        `https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/championrates.json`
      )
      .pipe(
        map(
          (response) =>
            (Object.keys(response.data.data[id])[0] as unknown) as Position
        ),
        tap(
          () => this.logger.log(`Successfully champion ${id} position`),
          () => this.logger.log(`Failed to fetch champion ${id} position`)
        )
      );
  }

  findAll({ version, language }: ChampionsArgs): Observable<Champion[]> {
    this.logger.log(`Fetching champions data`);

    return this.httpService
      .get<ChampionsResponse>(
        `https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion.json`
      )
      .pipe(
        map((response) =>
          Object.values(response.data.data).map(
            (champion) =>
              new Champion({
                id: champion.key,
                name: champion.name,
                tags: champion.tags,
                avatar: `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.id}.png`,
                difficulty: champion.info.difficulty,
              })
          )
        ),
        tap(
          () => this.logger.log('Successfully fetched champions data'),
          () => this.logger.log('Failed to fetch champions data')
        )
      );
  }
}
