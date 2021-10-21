import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
  Get,
  Param,
  Patch,
  ForbiddenException,
  Delete,
  Query,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { ReturnGameDto } from './dtos/return-game.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from '../auth/role.dacorator';
import { UserRole } from '../users/user-roles.enum';
import { User } from '../users/user.entity';
import { GetUser } from 'src/auth/get-user.decorator';
import { FindGamesQueryDto } from './dtos/find-games-query.dto';
import { CreateGameDto } from './dtos/create-game.dto';

@Controller('games')
@UseGuards(AuthGuard(), RolesGuard)
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @Post()
  /*  @Role(UserRole.ADMIN) */
  async createGame(
    @Body(ValidationPipe) createGameDto: CreateGameDto,
    @GetUser() user: User,
  ): Promise<ReturnGameDto> {
    if (user.role != UserRole.ADMIN) {
      throw new ForbiddenException(
        'Você não tem autorização para cadastrat um jogo',
      );
    } else {
      const game = await this.gamesService.createGame(createGameDto);
      return {
        game,
        message: 'Jogo cadastrado com sucesso',
      };
    }
  }
  @Get(':id')
  /* @Role(UserRole.ADMIN) */
  async findGameById(@Param('id') id): Promise<ReturnGameDto> {
    const game = await this.gamesService.findGameById(id);
    return {
      game,
      message: 'Jogo encontrado',
    };
  }

  @Patch(':id')
  async updateGame(
    @Body(ValidationPipe) updateGameDto: CreateGameDto,
    @GetUser() user: User,
    @Param('id') id: string,
  ) {
    if (user.role != UserRole.ADMIN && user.id.toString() != id) {
      throw new ForbiddenException(
        'Você não tem autorização para acessar esse recurso',
      );
    } else {
      return this.gamesService.updateGame(updateGameDto, id);
    }
  }

  @Delete(':id')
  async deleteGame(@Param('id') id: string, @GetUser() user: User) {
    if (user.role != UserRole.ADMIN) {
      throw new ForbiddenException(
        'Você não tem autorização para apagar um jogo',
      );
    } else {
      await this.gamesService.deleteGame(id);
      return {
        message: 'Jogo removido com sucesso',
      };
    }
  }

  @Get()
  /*   @Role(UserRole.ADMIN) */
  async findGames(@Query() query: FindGamesQueryDto) {
    const games = await this.gamesService.findGames(query);

    return {
      games,
      message: 'Jogos encontrados',
    };
  }
}
