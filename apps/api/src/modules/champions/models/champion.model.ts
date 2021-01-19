import { Field, ID, ObjectType } from '@nestjs/graphql';

type ChampionResponse = {
  id: string;
  key: string;
  name: string;
  tags: [string];
  info: { difficulty: number };
};

type Position = 'JUNGLE' | 'TOP' | 'UTILITY' | 'MIDDLE' | 'BOTTOM';

export type ChampionsResponse = {
  data: Record<string, ChampionResponse>;
};

export type ChampionsRatesResponse = {
  data: {
    data: Record<string, Record<Position, object>>;
  };
};

@ObjectType()
export class Champion {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  avatar: string;

  @Field((type) => [String])
  tags: [string];

  @Field()
  position: Position;

  @Field()
  difficulty: number;
}
