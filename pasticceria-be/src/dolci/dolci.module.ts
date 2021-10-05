import { Module } from '@nestjs/common';
import { DolciService } from './dolci.service';
import { DolciController } from './dolci.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dolce } from './entities/dolci.entity';
import { Ingrediente } from './entities/ingredienti.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dolce, Ingrediente])],
  controllers: [DolciController],
  providers: [DolciService]
})
export class DolciModule {}
