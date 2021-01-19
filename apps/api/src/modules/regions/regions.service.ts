import { Injectable, Logger } from '@nestjs/common';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Region } from './models/region.model';

@Injectable()
export class RegionsService {
  private readonly regions: Observable<Region[]> = of([
    new Region({
      id: 'br1',
      name: 'Brazil',
      abbreviation: 'br',
      languages: ['Portuguese'],
    }),
    new Region({
      id: 'eun1',
      name: 'Europe Nordic & East',
      abbreviation: 'eune',
      languages: [
        'Czech',
        'English',
        'Greek',
        'Hungarian',
        'Polish',
        'Romanian',
      ],
    }),
    new Region({
      id: 'euw1',
      name: 'Europe West',
      abbreviation: 'euw',
      languages: ['English', 'German', 'Spanish', 'French', 'Italian'],
    }),
    new Region({
      id: 'la1',
      name: 'Latin America North',
      abbreviation: 'lan',
      languages: ['Spanish'],
    }),
    new Region({
      id: 'la2',
      name: 'Latin America South',
      abbreviation: 'las',
      languages: ['Spanish'],
    }),
    new Region({
      id: 'na1',
      name: 'North America',
      abbreviation: 'na',
      languages: ['English'],
    }),
    new Region({
      id: 'oc1',
      name: 'Oceania',
      abbreviation: 'oce',
      languages: ['English'],
    }),
    new Region({
      id: 'ru1',
      name: 'Russia',
      abbreviation: 'ru',
      languages: ['Russian'],
    }),
    new Region({
      id: 'tr1',
      name: 'Turkey',
      abbreviation: 'tr',
      languages: ['Turkish'],
    }),
    new Region({
      id: 'jp1',
      name: 'Japan',
      abbreviation: 'jp',
      languages: ['Japanese'],
    }),
    new Region({
      id: 'kr',
      name: 'Republic of Korea',
      abbreviation: 'kr',
      languages: ['Korean'],
    }),
  ]);

  private readonly logger = new Logger('RegionsService');

  findAll(): Observable<Region[]> {
    return this.regions;
  }

  findDefault(): Observable<Region> {
    return this.regions.pipe(
      map((regions) => regions.find((region) => region.id === 'NA1'))
    );
  }
}
