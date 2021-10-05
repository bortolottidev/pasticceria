import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDolciDto } from './dto/create-dolci.dto';
import { UpdateDolciDto } from './dto/update-dolci.dto';
import { Dolce } from './entities/dolci.entity';

@Injectable()
export class DolciService {

  constructor(
    @InjectRepository(Dolce) private dolciRepository: Repository<Dolce>
  ){}

  create(createDolciDto: CreateDolciDto) {
    return 'This action adds a new dolci';
  }

  findAll(): Promise<Dolce[]> {
    return this.dolciRepository.find();
  }

  findOne(id: number): Promise<Dolce> {
    return this.dolciRepository.findOne(id, { relations: [ 'ingredienti' ]});
  }

  update(id: number, updateDolciDto: UpdateDolciDto) {
    return `This action updates a #${id} dolci`;
  }

  remove(id: number) {
    return `This action removes a #${id} dolci`;
  }
}
