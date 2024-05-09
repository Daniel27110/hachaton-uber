import { UsuarioEntity } from './usuario.entity/usuario.entity';
import { Repository } from 'typeorm';
export declare class UsuarioService {
    private readonly usuarioRepository;
    constructor(usuarioRepository: Repository<UsuarioEntity>);
    findAll(): Promise<UsuarioEntity[]>;
    findOne(id: string): Promise<UsuarioEntity>;
    create(usuario: UsuarioEntity): Promise<UsuarioEntity>;
    update(id: string, usuario: UsuarioEntity): Promise<UsuarioEntity>;
    delete(id: string): Promise<void>;
}
