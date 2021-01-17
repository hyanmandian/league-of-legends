import { HttpService, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { LanguagesResponse, Language } from './models/language.model';

@Injectable()
export class LanguagesService {
  private readonly logger = new Logger('LanguagesService');

  private readonly endpoint =
    'https://ddragon.leagueoflegends.com/cdn/languages.json';

  constructor(private httpService: HttpService) {}

  findAll(): Observable<Language[]> {
    this.logger.log('Fetching languages data');

    return this.httpService.get<LanguagesResponse>(this.endpoint).pipe(
      map((response) =>
        response.data.map((language) => ({ language } as Language))
      ),
      tap(
        () => this.logger.log('Successfully fetched languages data'),
        () => this.logger.log('Failed to fetch languages data')
      )
    );
  }

  findDefault(): Observable<Language> {
    this.logger.log('Fetching default language data');

    return this.findAll().pipe(
      map((languages) => languages[0]),
      tap(
        () => this.logger.log('Successfully fetched default language data'),
        () => this.logger.log('Failed to fetch default language data')
      )
    );
  }
}
