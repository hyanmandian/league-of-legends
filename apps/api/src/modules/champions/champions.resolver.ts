import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { Champion } from './models/champion.model';
import { ChampionsService } from './champions.service';

@Resolver((of) => Champion)
export class ChampionsResolver {
  constructor(private readonly championsService: ChampionsService) {}

  @Query((returns) => Champion)
  async champion(@Args('id') id: string): Promise<Champion> {
    const champion = await this.championsService.findOneById(id);

    if (!champion) {
      throw new NotFoundException(id);
    }

    return champion;
  }

  @Query((returns) => [Champion])
  champions(): Promise<Champion[]> {
    return this.championsService.findAll();
  }
}
