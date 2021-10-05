import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Dolce } from './dolci.entity';

@Entity('ingredienti')
export class Ingrediente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  nome: string;

  @Column()
  qta:  number;

  @Column({ length: 255 })
  unita_misura: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(type => Dolce)
  @JoinColumn({name : 'dolce_id', referencedColumnName: 'id'})
  dolce: Dolce;
}