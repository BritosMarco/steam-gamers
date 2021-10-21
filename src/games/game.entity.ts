import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 20 })
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

  @Column()
  categoria: number;
}
