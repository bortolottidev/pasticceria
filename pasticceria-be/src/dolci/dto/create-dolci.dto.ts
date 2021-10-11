export class IngredienteDto {
  nome: string;
  qta?: number;
  unita?: string;
}

export class CreateDolciDto {
  nome: string;
  prezzo: number;
  ingredienti: IngredienteDto[];
}
