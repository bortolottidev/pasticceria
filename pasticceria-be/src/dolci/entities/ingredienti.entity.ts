import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { IngredienteDto } from '../dto/create-dolci.dto';
import { Dolce } from './dolci.entity';

@Entity('ingredienti')
export class Ingrediente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  nome: string;

  @Column()
  qta:  number;

  @Column({ length: 255, name: 'unita_misura' })
  unitaMisura: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => Dolce, { cascade: true })
  @JoinColumn({name : 'dolce_id', referencedColumnName: 'id'})
  dolce: Dolce;

  static build (dolce: Dolce, ingredienteDto: IngredienteDto): Ingrediente {
    const i = new Ingrediente();
    i.dolce = dolce;
    i.nome = ingredienteDto.nome;
    i.qta = ingredienteDto.qta;
    i.unitaMisura = ingredienteDto.unita;
    return i;
  }
  
}