import { LugarEntity } from 'src/lugar/lugar.entity/lugar.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ViajeEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    // destino
    @ManyToOne(() => LugarEntity, lugar => lugar.puntosDestino)
    destino: LugarEntity;

    // origen
    @ManyToOne(() => LugarEntity, lugar => lugar.puntosOrigen)
    origen: LugarEntity;

    // pasajero, puede haber muchos pasajeros en un viaje
    @ManyToMany(() => UsuarioEntity, usuario => usuario.viajesPasajero)
    pasajero: UsuarioEntity;

    // conductor, solo puede haber un conductor en un viaje
    @ManyToOne(() => UsuarioEntity, usuario => usuario.viajesConductor)
    conductor: UsuarioEntity;

}