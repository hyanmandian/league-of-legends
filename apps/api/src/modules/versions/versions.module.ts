import { Module, HttpModule } from '@nestjs/common';

import { VersionsService } from './versions.service';
import { VersionsResolver } from './versions.resolver';

@Module({
  imports: [HttpModule],
  providers: [VersionsService, VersionsResolver],
})
export class VersionsModule {}
