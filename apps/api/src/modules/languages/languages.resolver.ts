import { Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';

import { Language } from './models/language.model';
import { LanguagesService } from './languages.service';

@Resolver((of) => Language)
export class LanguagesResolver {
  constructor(private readonly languagesService: LanguagesService) {}

  @Query((returns) => [Language])
  languages(): Observable<Language[]> {
    return this.languagesService.findAll();
  }

  @Query((returns) => Language)
  defaultLanguage(): Observable<Language> {
    return this.languagesService.findDefault();
  }
}
