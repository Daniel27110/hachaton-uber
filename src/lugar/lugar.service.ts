import { Injectable } from '@nestjs/common';
import { LugarEntity } from './lugar.entity/lugar.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class LugarService {
    constructor(
        @InjectRepository(LugarEntity)
        private readonly lugarRepository: Repository<LugarEntity>
    ) { }

    async findAll(): Promise<LugarEntity[]> {
        return await this.lugarRepository.find();
    }

    async findOne(id: string): Promise<LugarEntity> {
        const lugar: LugarEntity = await this.lugarRepository.findOne({ where: { id }, relations: ["artworks", "exhibitions"] });
        if (!lugar)
            throw new BusinessLogicException("The lugar with the given id was not found", BusinessError.NOT_FOUND);

        return lugar;
    }

    async create(lugar: LugarEntity): Promise<LugarEntity> {
        return await this.lugarRepository.save(lugar);
    }

    async update(id: string, lugar: LugarEntity): Promise<LugarEntity> {
        const persistedMuseum: LugarEntity = await this.lugarRepository.findOne({ where: { id } });
        if (!persistedMuseum)
            throw new BusinessLogicException("The lugar with the given id was not found", BusinessError.NOT_FOUND);

        return await this.lugarRepository.save({ ...persistedMuseum, ...lugar });
    }

    async delete(id: string) {
        const lugar: LugarEntity = await this.lugarRepository.findOne({ where: { id } });
        if (!lugar)
            throw new BusinessLogicException("The lugar with the given id was not found", BusinessError.NOT_FOUND);

        await this.lugarRepository.remove(lugar);
    }
}
