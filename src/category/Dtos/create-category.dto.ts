import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'Informe a Categoria' })
  @MaxLength(200, {
    message: 'Categoria deve ter menos de 200 carcateres',
  })
  name: string;
}
