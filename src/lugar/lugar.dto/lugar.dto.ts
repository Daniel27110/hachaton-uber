import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
export class LugarDto {

    @IsString()
    @IsNotEmpty()
    readonly id: string;

    @IsString()
    @IsNotEmpty()
    readonly latitud: string;

    @IsString()
    @IsNotEmpty()
    readonly longitud: string;

}