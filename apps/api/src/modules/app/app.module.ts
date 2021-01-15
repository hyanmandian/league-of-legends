import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { ChampionsModule } from '../champions/champions.module';

@Module({
  imports: [
    ChampionsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
