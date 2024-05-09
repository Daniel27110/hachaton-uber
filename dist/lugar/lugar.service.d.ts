import { LugarEntity } from './lugar.entity/lugar.entity';
import { Repository } from 'typeorm';
export declare class LugarService {
    private readonly lugarRepository;
    constructor(lugarRepository: Repository<LugarEntity>);
    findAll(): Promise<LugarEntity[]>;
    findOne(id: string): Promise<LugarEntity>;
    create(lugar: LugarEntity): Promise<LugarEntity>;
    update(id: string, lugar: LugarEntity): Promise<LugarEntity>;
    delete(id: string): Promise<void>;
}
