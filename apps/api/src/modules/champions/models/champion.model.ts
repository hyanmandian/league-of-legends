import { Field, ID, ObjectType } from '@nestjs/graphql';

export type Position = 'JUNGLE' | 'TOP' | 'UTILITY' | 'MIDDLE' | 'BOTTOM';

export type ChampionsResponse = {
  data: Record<
    string,
    {
      id: string;
      key: string;
      name: string;
      tags: [string];
      info: { difficulty: number };
    }
  >;
};

export type RatesResponse = {
  data: {
    data: Record<
      string,
      Record<
        Position,
        {
          playRate: number;
          winRate: number;
          banRate: number;
        }
      >
    >;
  };
};

@ObjectType()
export class Champion {
  constructor(partial: Partial<Champion>) {
    Object.assign(this, partial);
  }

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
