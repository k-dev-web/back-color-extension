import {Controller, Get, Post, Body, Param, Request, Query, UseGuards} from '@nestjs/common';

import {ColorsService} from './colors.service';
import {Colors as ColorsEntity} from './colors.entity';
import {ColorsDto} from './dto/colors.dto';
import {JwtAuthGuard} from "../auth/jwt.strategy";

@Controller('colors')
export class ColorsController {
    constructor(private readonly colorsService: ColorsService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Query() page:any, @Request() req) {

        return await this.colorsService.findAll(page.page);
    }


    @Post()
    async create(@Body() color: ColorsDto, @Request() req): Promise<ColorsEntity> {
        return await this.colorsService.create(color);
    }
}
