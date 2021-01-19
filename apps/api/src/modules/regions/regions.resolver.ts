import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { VersionsService } from '../versions/versions.service';

import { Region } from './models/region.model';
import { RegionsService } from './regions.service';

@Resolver((of) => Region)
export class RegionsResolver {
  constructor(
    private readonly regionsService: RegionsService,
    private readonly versionsService: VersionsService
  ) {}

  @Query((returns) => [Region])
  regions(): Observable<Region[]> {
    return this.regionsService.findAll();
  }

  @Query((returns) => Region)
  defaultRegion(): Observable<Region> {
    return this.regionsService.findDefault();
  }

  @ResolveField('version', (returns) => String)
  version(@Parent() region: Region) {
    return this.versionsService
      .findCurrentByRegion(region.abbreviation)
      .pipe(map((version) => version.version));
  }
}
