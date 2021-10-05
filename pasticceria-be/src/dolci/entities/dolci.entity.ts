import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { Ingrediente } from './ingredienti.entity';

@Entity('dolci')
export class Dolce {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  nome: string;

  @Column({ nullable: false })
  prezzo:  number

  @Column({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => Ingrediente, ingrediente => ingrediente.dolce)
  ingredienti: Ingrediente[];
}