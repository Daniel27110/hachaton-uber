import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors/business-errors.interceptor';
import { ViajeDto } from './viaje.dto/viaje.dto';
import { ViajeEntity } from './viaje.entity/viaje.entity';
import { ViajeService } from './viaje.service';

@Controller('viaje')
@UseInterceptors(BusinessErrorsInterceptor)
export class ViajeController {
    constructor(private readonly viajeService: ViajeService) { }

    @Get()
    async findAll() {
        return await this.viajeService.findAll();
    }

    @Get(':viajeId')
    async findOne(@Param('viajeId') viajeId: string) {
        return await this.viajeService.findOne(viajeId);
    }

    @Post()
    async create(@Body() viajeDto: ViajeDto) {
        const viaje: ViajeEntity = plainToInstance(ViajeEntity, viajeDto);
        return await this.viajeService.create(viaje);
    }

    @Put(':viajeId')
    async update(@Param('viajeId') viajeId: string, @Body() viajeDto: ViajeDto) {
        const viaje: ViajeEntity = plainToInstance(ViajeEntity, viajeDto);
        return await this.viajeService.update(viajeId, viaje);
    }

    @Delete(':viajeId')
    @HttpCode(204)
    async delete(@Param('viajeId') viajeId: string) {
        return await this.viajeService.delete(viajeId);
    }
}