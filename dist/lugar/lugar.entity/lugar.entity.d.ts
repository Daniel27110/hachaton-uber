import { ViajeEntity } from 'src/viaje/viaje.entity/viaje.entity';
export declare class LugarEntity {
    id: string;
    latitud: string;
    longitud: string;
    puntosOrigen: ViajeEntity[];
    puntosDestino: ViajeEntity[];
}
