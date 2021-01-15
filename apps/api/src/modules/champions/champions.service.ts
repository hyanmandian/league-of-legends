import { Injectable } from '@nestjs/common';

import { Champion } from './models/champion.model';

@Injectable()
export class ChampionsService {
  async findOneById(id: string): Promise<Champion> {
    return {} as Champion;
  }

  async findAll(): Promise<Champion[]> {
    return [] as Champion[];
  }
}
