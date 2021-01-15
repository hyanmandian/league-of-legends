import { Module } from '@nestjs/common';

import { ChampionsResolver } from './champions.resolver';
import { ChampionsService } from './champions.service';

@Module({
  imports: [],
  providers: [ChampionsService, ChampionsResolver],
})
export class ChampionsModule {}
