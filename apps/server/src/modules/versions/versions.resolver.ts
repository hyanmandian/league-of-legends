import { Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';

import { Version } from './models/version.model';
import { VersionsService } from './versions.service';

@Resolver((of) => Version)
export class VersionsResolver {
  constructor(private readonly versionsService: VersionsService) {}

  @Query((returns) => [Version])
  versions(): Observable<Version[]> {
    return this.versionsService.findAll();
  }
}
