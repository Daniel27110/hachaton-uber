import { Injectable } from '@nestjs/common';
import { ViajeEntity } from './viaje.entity/viaje.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class ViajeService {
    constructor(
        @InjectRepository(ViajeEntity)
        private readonly viajeRepository: Repository<ViajeEntity>
    ) { }

    async findAll(): Promise<ViajeEntity[]> {
        return await this.viajeRepository.find();
    }

    async findOne(id: string): Promise<ViajeEntity> {
        const viaje: ViajeEntity = await this.viajeRepository.findOne({ where: { id }, relations: ["artworks", "exhibitions"] });
        if (!viaje)
            throw new BusinessLogicException("The viaje with the given id was not found", BusinessError.NOT_FOUND);

        return viaje;
    }

    async create(viaje: ViajeEntity): Promise<ViajeEntity> {
        return await this.viajeRepository.save(viaje);
    }

    async update(id: string, viaje: ViajeEntity): Promise<ViajeEntity> {
        const persistedMuseum: ViajeEntity = await this.viajeRepository.findOne({ where: { id } });
        if (!persistedMuseum)
            throw new BusinessLogicException("The viaje with the given id was not found", BusinessError.NOT_FOUND);

        return await this.viajeRepository.save({ ...persistedMuseum, ...viaje });
    }

    async delete(id: string) {
        const viaje: ViajeEntity = await this.viajeRepository.findOne({ where: { id } });
        if (!viaje)
            throw new BusinessLogicException("The viaje with the given id was not found", BusinessError.NOT_FOUND);

        await this.viajeRepository.remove(viaje);
    }
}
