import { Dolce } from "../entities/dolci.entity";

export class DolciDto {
  id: number;
  createdAt: Date;
  nome: string;
  days: number;
  prezzo: number;
  prezzoOriginale: number;
  discount: number;
  eatable: boolean;

  static buildFromDolce({ id, createdAt, nome, prezzo }: Dolce): DolciDto {
    const diff = new Date().getTime() - createdAt.getTime();
    // ms => s => m => h => d
    const convertFactor = 1 / (1000 * 60 * 60 * 24);
    const diffAsDays = Math.round(diff * convertFactor);

    // First day 100%
    let discountFactor = 1;
    let eatable = true;
    // Second day 80%
    if (diffAsDays === 1) {
      discountFactor = 0.8;
    }

    // Third day 20%
    else if (diffAsDays === 2) {
      discountFactor = 0.2;
    }

    // Not eatable
    else if (diffAsDays > 2) {
      discountFactor = 0;
      eatable = false;
    }

    return {
      id,
      createdAt,
      nome,
      days: diffAsDays,
      prezzo: prezzo * discountFactor,
      prezzoOriginale: prezzo,
      discount: (1 - discountFactor) * 100,
      eatable,
    };
  }
}
