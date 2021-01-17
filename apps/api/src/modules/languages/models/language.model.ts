import { Field, ObjectType } from '@nestjs/graphql';

type LanguageResponse = string;

export type LanguagesResponse = [LanguageResponse];

@ObjectType()
export class Language {
  @Field()
  language: LanguageResponse;
}
