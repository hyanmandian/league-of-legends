import { Module, HttpModule } from '@nestjs/common';

import { LanguagesService } from './languages.service';
import { LanguagesResolver } from './languages.resolver';

@Module({
  imports: [HttpModule],
  providers: [LanguagesService, LanguagesResolver],
})
export class LanguagesModule {}
