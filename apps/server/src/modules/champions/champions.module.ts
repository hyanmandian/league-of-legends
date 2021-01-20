import { HttpModule, Module } from '@nestjs/common';

import { ChampionsService } from './champions.service';
import { ChampionsResolver } from './champions.resolver';

@Module({
  imports: [HttpModule],
  providers: [ChampionsService, ChampionsResolver],
})
export class ChampionsModule {}
