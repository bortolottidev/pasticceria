import { PartialType } from '@nestjs/mapped-types';
import { CreateDolciDto, IngredienteDto } from './create-dolci.dto';

export class UpdateDolciDto extends PartialType(CreateDolciDto) {
  nome: string;
  prezzo:  number
  ingredienti: IngredienteDto[];
}
