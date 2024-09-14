/* Global imports */
import {IsNotEmpty, IsOptional, IsString, MinLength} from 'class-validator';
/** DTO for ciudad entitie */
export class CiudadDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  readonly nombre: string;
}
/** DTO for update supermercado entitie */
export class SupermercadoUpdateDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @IsOptional()
  readonly nombre: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @IsOptional()
  readonly longitud: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @IsOptional()
  readonly latitud: string;


  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @IsOptional()
  readonly paginaWeb: string;

}