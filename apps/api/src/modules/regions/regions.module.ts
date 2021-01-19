import { Module, HttpModule } from '@nestjs/common';

import { VersionsService } from '../versions/versions.service';

import { RegionsService } from './regions.service';
import { RegionsResolver } from './regions.resolver';

@Module({
  imports: [HttpModule],
  providers: [RegionsService, RegionsResolver, VersionsService],
})
export class RegionsModule {}
