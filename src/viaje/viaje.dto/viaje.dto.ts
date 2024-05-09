import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
export class ViajeDto {

    @IsString()
    @IsNotEmpty()
    readonly id: string;

}