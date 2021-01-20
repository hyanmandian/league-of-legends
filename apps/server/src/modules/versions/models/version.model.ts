import { Field, ObjectType } from '@nestjs/graphql';

export type VersionResponse = {
  v: string;
};

export type VersionsResponse = [string];

@ObjectType()
export class Version {
  constructor(partial: Partial<Version>) {
    Object.assign(this, partial);
  }

  @Field()
  version: string;
}
