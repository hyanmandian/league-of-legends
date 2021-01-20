import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class ChampionsArgs {
  @Field()
  version: string;

  @Field()
  language: string;
}
