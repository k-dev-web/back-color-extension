import { Module } from '@nestjs/common';

import { ColorsService } from './colors.service';
import { ColorsController } from './colors.controller';
import { colorsProviders } from './colors.providers';

@Module({
  providers: [ColorsService, ...colorsProviders],
  controllers: [ColorsController],
})
export class ColorsModule {}
