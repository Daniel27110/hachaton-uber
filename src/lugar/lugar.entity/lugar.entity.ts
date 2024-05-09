import { ViajeEntity } from 'src/viaje/viaje.entity/viaje.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LugarEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    latitud: string;

    @Column()
    longitud: string;

    // un lugar puede ser tanto origen como destino de un viaje

    @OneToMany(() => ViajeEntity, viaje => viaje.origen)
    puntosOrigen: ViajeEntity[];

    @OneToMany(() => ViajeEntity, viaje => viaje.destino)
    puntosDestino: ViajeEntity[];

}