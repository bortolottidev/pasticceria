import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DolciService } from './dolci.service';
import { Dolce } from './entities/dolci.entity';

describe('DolciService', () => {
  let service: DolciService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DolciService
        , { useValue: { }, provide: getRepositoryToken(Dolce) }
      ],
    }).compile();

    service = module.get<DolciService>(DolciService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
