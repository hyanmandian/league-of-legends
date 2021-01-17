import { HttpService, Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Champion, ChampionsResponse } from './models/champion.model';
import { ChampionsArgs } from './dto/champions.args';

@Injectable()
export class ChampionsService {
  private readonly logger = new Logger('ChampionsService');

  constructor(private httpService: HttpService) {}

  findAll({ version, language }: ChampionsArgs): Observable<Champion[]> {
    this.logger.log('Fetching champions data');

    return this.httpService
      .get<ChampionsResponse>(
        `http://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion.json`
      )
      .pipe(
        map((response) =>
          Object.values(response.data.data).map(
            (champion) => ({ id: champion.id, name: champion.name } as Champion)
          )
        ),
        tap(
          () => this.logger.log('Successfully fetched champions data'),
          () => this.logger.log('Failed to fetch champions data')
        )
      );
  }
}
