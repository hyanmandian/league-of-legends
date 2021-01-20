import { HttpService, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import {
  Version,
  VersionResponse,
  VersionsResponse,
} from './models/version.model';

@Injectable()
export class VersionsService {
  private readonly logger = new Logger('VersionsService');

  constructor(private httpService: HttpService) {}

  findAll(): Observable<Version[]> {
    this.logger.log('Fetching versions');

    return this.httpService
      .get<VersionsResponse>(
        'https://ddragon.leagueoflegends.com/api/versions.json'
      )
      .pipe(
        map((response) =>
          response.data.map((version) => new Version({ version }))
        ),
        tap(
          () => this.logger.log('Successfully fetched versions'),
          () => this.logger.log('Failed to fetch versions')
        )
      );
  }

  findCurrentByRegion(region: string): Observable<Version> {
    this.logger.log(`Fetching region ${region} version`);

    return this.httpService
      .get<VersionResponse>(
        `https://ddragon.leagueoflegends.com/realms/${region}.json`
      )
      .pipe(
        map((response) => new Version({ version: response.data.v })),
        tap(
          () =>
            this.logger.log(`Successfully fetched region ${region} version`),
          () => this.logger.log(`Failed to fetch ${region} version`)
        )
      );
  }
}
