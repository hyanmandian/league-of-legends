import { Logger, Injectable, HttpService } from '@nestjs/common';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
        map((response) => {
          const a = (Object.keys(
            response.data.data[id]
          )[0] as unknown) as Position;
          console.log(a);
          return a;
        }),
        tap(
          () => this.logger.log(`Successfully fetched champion ${id} position`),
          () => this.logger.log(`Failed to fetch champion ${id} position`)
        )
      );
  }

  findAll({ version, language }: ChampionsArgs): Observable<Champion[]> {
    this.logger.log(`Fetching champions`);

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
                title:
                  champion.title.charAt(0).toUpperCase() +
                  champion.title.slice(1),
                avatar: `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.id}.png`,
                difficulty: champion.info.difficulty,
              })
          )
        ),
        tap(
          () => this.logger.log('Successfully fetched champions'),
          () => this.logger.log('Failed to fetch champions')
        )
      );
  }
}
