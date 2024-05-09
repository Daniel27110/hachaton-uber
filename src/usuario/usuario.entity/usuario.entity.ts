import { ViajeEntity } from 'src/viaje/viaje.entity/viaje.entity';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsuarioEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    correo: string;

    // En uber un usuario puede ser pasajero o conductor
    // SE MODELA COMO UN HISTORIAL DE VIAJES

    @ManyToMany(() => ViajeEntity, viaje => viaje.pasajero)
    viajesPasajero: ViajeEntity[];

    @OneToMany(() => ViajeEntity, viaje => viaje.conductor)
    viajesConductor: ViajeEntity[];
}