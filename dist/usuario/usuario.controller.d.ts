import { UsuarioDto } from './usuario.dto/usuario.dto';
import { UsuarioEntity } from './usuario.entity/usuario.entity';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    findAll(): Promise<UsuarioEntity[]>;
    findOne(usuarioId: string): Promise<UsuarioEntity>;
    create(usuarioDto: UsuarioDto): Promise<UsuarioEntity>;
    update(usuarioId: string, usuarioDto: UsuarioDto): Promise<UsuarioEntity>;
    delete(usuarioId: string): Promise<void>;
}
