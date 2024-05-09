import { ViajeDto } from './viaje.dto/viaje.dto';
import { ViajeEntity } from './viaje.entity/viaje.entity';
import { ViajeService } from './viaje.service';
export declare class ViajeController {
    private readonly viajeService;
    constructor(viajeService: ViajeService);
    findAll(): Promise<ViajeEntity[]>;
    findOne(viajeId: string): Promise<ViajeEntity>;
    create(viajeDto: ViajeDto): Promise<ViajeEntity>;
    update(viajeId: string, viajeDto: ViajeDto): Promise<ViajeEntity>;
    delete(viajeId: string): Promise<void>;
}
