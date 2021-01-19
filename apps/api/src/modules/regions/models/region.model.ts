import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Region {
  constructor(partial: Partial<Region>) {
    Object.assign(this, partial);
  }

  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  abbreviation: string;

  @Field()
  version?: string;

  @Field((type) => [String])
  languages: string[];
}
