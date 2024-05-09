import { ViajeEntity } from 'src/viaje/viaje.entity/viaje.entity';
export declare class UsuarioEntity {
    id: string;
    nombre: string;
    apellido: string;
    correo: string;
    viajesPasajero: ViajeEntity[];
    viajesConductor: ViajeEntity[];
}
