import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors/business-errors.interceptor';
import { LugarDto } from './lugar.dto/lugar.dto';
import { LugarEntity } from './lugar.entity/lugar.entity';
import { LugarService } from './lugar.service';

@Controller('lugar')
@UseInterceptors(BusinessErrorsInterceptor)
export class LugarController {
    constructor(private readonly lugarService: LugarService) { }

    @Get()
    async findAll() {
        return await this.lugarService.findAll();
    }

    @Get(':lugarId')
    async findOne(@Param('lugarId') lugarId: string) {
        return await this.lugarService.findOne(lugarId);
    }

    @Post()
    async create(@Body() lugarDto: LugarDto) {
        const lugar: LugarEntity = plainToInstance(LugarEntity, lugarDto);
        return await this.lugarService.create(lugar);
    }

    @Put(':lugarId')
    async update(@Param('lugarId') lugarId: string, @Body() lugarDto: LugarDto) {
        const lugar: LugarEntity = plainToInstance(LugarEntity, lugarDto);
        return await this.lugarService.update(lugarId, lugar);
    }

    @Delete(':lugarId')
    @HttpCode(204)
    async delete(@Param('lugarId') lugarId: string) {
        return await this.lugarService.delete(lugarId);
    }
}