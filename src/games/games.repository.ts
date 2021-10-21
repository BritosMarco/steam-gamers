import { EntityRepository, Repository } from 'typeorm';
import { Game } from './game.entity';
import { CreateGameDto } from './dtos/create-game.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Game)
export class GameRepository extends Repository<Game> {
  FindGames: any;
  async createGame(createGameDto: CreateGameDto): Promise<Game> {
    const { name, bio, imagem, data_lancamento, categoria, curtidas } =
      createGameDto;
    const game = this.create();
    game.bio = bio;
    game.name = name;
    game.data_lancamento = data_lancamento;
    game.categoria = categoria;
    game.curtidas = curtidas;
    game.imagem = imagem;

    try {
      await game.save();
      return game;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('Jogo Já cadastrado');
      } else {
        throw new InternalServerErrorException('Erro ao cadastrar jogo');
      }
    }
  }
}
