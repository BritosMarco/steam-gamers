import { User } from 'src/users/user.entity';
import {
  BaseEntity,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
/* @Unique(['name']) */
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  bio: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  imagem: string;

  @CreateDateColumn({ nullable: false, type: 'varchar', length: 10 })
  data_lancamento: string;

  @CreateDateColumn()
  createdAd: Date;

  @UpdateDateColumn()
  updatedAd: Date;

  @Column()
  curtidas: number;

  @ManyToOne(() => User, (user) => user.game)
  users: User;
}
