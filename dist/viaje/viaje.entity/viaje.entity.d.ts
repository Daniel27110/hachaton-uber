import { LugarEntity } from 'src/lugar/lugar.entity/lugar.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
export declare class ViajeEntity {
    id: string;
    destino: LugarEntity;
    origen: LugarEntity;
    pasajero: UsuarioEntity;
    conductor: UsuarioEntity;
}
