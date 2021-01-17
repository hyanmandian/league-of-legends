import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { VersionsModule } from '../versions/versions.module';
import { ChampionsModule } from '../champions/champions.module';
import { LanguagesModule } from '../languages/languages.module';

@Module({
  imports: [
    VersionsModule,
    ChampionsModule,
    LanguagesModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(__dirname, './schema.gql'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
