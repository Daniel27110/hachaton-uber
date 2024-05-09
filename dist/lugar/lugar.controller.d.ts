import { LugarDto } from './lugar.dto/lugar.dto';
import { LugarEntity } from './lugar.entity/lugar.entity';
import { LugarService } from './lugar.service';
export declare class LugarController {
    private readonly lugarService;
    constructor(lugarService: LugarService);
    findAll(): Promise<LugarEntity[]>;
    findOne(lugarId: string): Promise<LugarEntity>;
    create(lugarDto: LugarDto): Promise<LugarEntity>;
    update(lugarId: string, lugarDto: LugarDto): Promise<LugarEntity>;
    delete(lugarId: string): Promise<void>;
}
