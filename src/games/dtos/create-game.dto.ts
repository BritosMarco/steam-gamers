import { IsNotEmpty, MaxLength, MinLength, IsNumber } from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty({ message: 'Informe o nome do Game' })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 carcateres',
  })
  name: string;

  @IsNotEmpty({ message: 'Informe o endereco da imagem' })
  @MaxLength(200, {
    message: 'O endereco da imagem deve ter menos de 200 carcateres',
  })
  imagem: string;

  @IsNotEmpty({ message: 'Insira um pequeno resumo do jogo' })
  @MaxLength(60, {
    message: 'O resumo deve ter menos de 200 carcateres',
  })
  bio: string;

  @IsNotEmpty({ message: 'Informe a data de lançamento' })
  @MinLength(10, {
    message: 'A data de lançamento deve ter no mínimo 10 carcateres',
  })
  data_lancamento: string;

  @IsNotEmpty({ message: 'Informe a confirmação de senha' })
  @MinLength(6, {
    message: 'A confirmação de senha deve ter no mínimo 6 carcateres',
  })
  @IsNotEmpty()
  @IsNumber()
  categoria?: number;

  @IsNumber()
  curtidas: number;
}
