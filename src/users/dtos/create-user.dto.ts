import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Informe um endereço de email' })
  @IsEmail({}, { message: 'Informe um email válido' })
  @MaxLength(200, { message: 'O endereço de email tem mais de 200 caracteres' })
  email: string;

  @IsNotEmpty({ message: 'Informe o nome do usuário' })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 carcateres',
  })
  name: string;

  @IsNotEmpty({ message: 'Informe o endereco da imagem' })
  @MaxLength(200, {
    message: 'O endereco da imagem deve ter menos de 200 carcateres',
  })
  imagem: string;

  @IsNotEmpty({ message: 'Informe um usuário' })
  @MaxLength(60, {
    message: 'O usuario deve ter menos de 60 carcateres',
  })
  username: string;

  @IsNotEmpty({ message: 'Informe uma senha' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 carcateres' })
  password: string;

  @IsNotEmpty({ message: 'Informe a confirmação de senha' })
  @MinLength(6, {
    message: 'A confirmação de senha deve ter no mínimo 6 carcateres',
  })
  passwordConfirmation: string;
}
