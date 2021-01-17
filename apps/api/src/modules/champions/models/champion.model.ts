import { Field, ID, ObjectType } from '@nestjs/graphql';

type ChampionResponse = { id: string; name: string };

export type ChampionsResponse = {
  data: Record<string, ChampionResponse>;
};

@ObjectType()
export class Champion {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;
}
