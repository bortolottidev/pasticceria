import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDolciDto } from './dto/create-dolci.dto';
import { UpdateDolciDto } from './dto/update-dolci.dto';
import { Dolce } from './entities/dolci.entity';
import { Ingrediente } from './entities/ingredienti.entity';

@Injectable()
export class DolciService {
  constructor(
    @InjectRepository(Dolce) private dolciRepository: Repository<Dolce>,
    @InjectRepository(Ingrediente)
    private ingredientiRepository: Repository<Ingrediente>,
  ) {}

  async create(createDolciDto: CreateDolciDto): Promise<Dolce> {
    const { nome, prezzo, ingredienti } = createDolciDto;
    // TODO Need Transaction, can create dolce without ingredienti 
    const newDolce: Dolce = await this.dolciRepository.save({ nome, prezzo: Number(prezzo) });
    await this.ingredientiRepository.save(
      ingredienti.map((i) => Ingrediente.build(newDolce, i)),
    );

    return newDolce;
  }

  findAll(): Promise<Dolce[]> {
    return this.dolciRepository.find();
  }

  findOne(id: number): Promise<Dolce> {
    return this.dolciRepository.findOne(id, { relations: ['ingredienti'] });
  }

  async update(id: number, updateDolciDto: UpdateDolciDto) {
    const { nome, prezzo, ingredienti } = updateDolciDto;
    const dolce: Dolce = await this.dolciRepository.save({
      id,
      prezzo,
      nome
    });

    if (!ingredienti) { 
      return dolce;
    }
    
    try {
      const oldIngredienti: Ingrediente[] = await this.ingredientiRepository.find({ dolce });
    
      // write new
      await this.ingredientiRepository.save(
        ingredienti.map((i) => Ingrediente.build(dolce, i)),
      );
      
      // remove old
      await this.ingredientiRepository.delete(oldIngredienti.map(i => i.id))
    } catch(error) {
      console.error({ msg: 'Cannot update ingredienti', error });
      throw error;
    }
    
    return dolce;
  }

  async remove(id: number): Promise<void> {
    await this.ingredientiRepository.delete({ dolce: { id } })
    await this.dolciRepository.delete(id);
  }
}
