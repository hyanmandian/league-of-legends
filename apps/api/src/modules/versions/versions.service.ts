import { HttpService, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { VersionsResponse, Version } from './models/version.model';

@Injectable()
export class VersionsService {
  private readonly logger = new Logger('VersionsService');

  private readonly endpoint =
    'https://ddragon.leagueoflegends.com/api/versions.json';

  constructor(private httpService: HttpService) {}

  findAll(): Observable<Version[]> {
    this.logger.log('Fetching versions');

    return this.httpService.get<VersionsResponse>(this.endpoint).pipe(
      map((response) =>
        response.data.map((version) => ({ version } as Version))
      ),
      tap(
        () => this.logger.log('Successfully fetched versions'),
        () => this.logger.log('Failed to fetch versions')
      )
    );
  }

  findCurrent(): Observable<Version> {
    this.logger.log('Fetching current version');

    return this.findAll().pipe(
      map((versions) => versions[0]),
      tap(
        () => this.logger.log('Successfully fetched current version'),
        () => this.logger.log('Failed to fetch current version')
      )
    );
  }
}
