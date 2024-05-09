import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
export class UsuarioDto {

    @IsString()
    @IsNotEmpty()
    readonly id: string;

    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    @IsString()
    @IsNotEmpty()
    readonly apellido: string;

    @IsString()
    @IsNotEmpty()
    readonly correo: string;

}