import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { RegionsModule } from '../regions/regions.module';
import { VersionsModule } from '../versions/versions.module';
import { ChampionsModule } from '../champions/champions.module';
import { LanguagesModule } from '../languages/languages.module';

@Module({
  imports: [
    RegionsModule,
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
