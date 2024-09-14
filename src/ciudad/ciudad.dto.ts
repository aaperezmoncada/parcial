/* Global imports */
import {IsNotEmpty, IsOptional, IsString, MinLength} from 'class-validator';
/** DTO for ciudad entitie */
export class CiudadDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  readonly nombre: string;
}
/** DTO for update ciudad entitie */
export class CiudadUpdateDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @IsOptional()
  readonly nombre: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @IsOptional()
  readonly pais: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @IsOptional()
  readonly habitantes: number;
}