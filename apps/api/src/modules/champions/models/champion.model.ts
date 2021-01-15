import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Champion {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;
}
