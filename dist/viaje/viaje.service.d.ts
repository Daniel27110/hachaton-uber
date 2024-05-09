import { ViajeEntity } from './viaje.entity/viaje.entity';
import { Repository } from 'typeorm';
export declare class ViajeService {
    private readonly viajeRepository;
    constructor(viajeRepository: Repository<ViajeEntity>);
    findAll(): Promise<ViajeEntity[]>;
    findOne(id: string): Promise<ViajeEntity>;
    create(viaje: ViajeEntity): Promise<ViajeEntity>;
    update(id: string, viaje: ViajeEntity): Promise<ViajeEntity>;
    delete(id: string): Promise<void>;
}
