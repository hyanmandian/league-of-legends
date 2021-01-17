import { Args, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';

import { Champion } from './models/champion.model';
import { ChampionsArgs } from './dto/champions.args';
import { ChampionsService } from './champions.service';

@Resolver((of) => Champion)
export class ChampionsResolver {
  constructor(private readonly championsService: ChampionsService) {}

  @Query((returns) => [Champion])
  champions(@Args() params: ChampionsArgs): Observable<Champion[]> {
    return this.championsService.findAll(params);
  }
}
