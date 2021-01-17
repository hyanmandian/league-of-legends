import { Field, ObjectType } from '@nestjs/graphql';

type VersionResponse = string;

export type VersionsResponse = [VersionResponse];

@ObjectType()
export class Version {
  @Field()
  version: VersionResponse;
}
