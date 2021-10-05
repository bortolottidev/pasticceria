import { Test, TestingModule } from '@nestjs/testing';
import { DolciController } from './dolci.controller';
import { DolciService } from './dolci.service';

const dolci = [
  {
    id: 1,
    nome: 'cornetto vecchissimo',
    prezzo: 1,
    createdAt: '2021-10-01T19:30:39.600Z',
  },
  {
    id: 2,
    nome: 'cornetto vecchio',
    prezzo: 1,
    createdAt: '2021-10-02T19:30:39.602Z',
  },
  {
    id: 3,
    nome: 'cornetto vuoto',
    prezzo: 1,
    createdAt: '2021-10-03T19:30:39.603Z',
  },
  {
    id: 4,
    nome: 'cornetto vegano',
    prezzo: 1.2,
    createdAt: '2021-10-04T19:30:39.603Z',
  },
  {
    id: 5,
    nome: 'cornetto alla fragola',
    prezzo: 1.25,
    createdAt: '2021-10-05T19:30:39.604Z',
  },
]

const dolceById = {
  id: 3,
  nome: 'cornetto vuoto',
  prezzo: 1,
  createdAt: '2021-10-03T19:30:39.603Z',
  ingredienti: [
    {
      id: 1,
      nome: 'zucchero',
      qta: 120,
      unita_misura: 'g',
      createdAt: '2021-10-05T19:30:39.611Z',
    },
    {
      id: 2,
      nome: 'maltodestrine',
      qta: 5,
      unita_misura: 'g',
      createdAt: '2021-10-05T19:30:39.613Z',
    },
    {
      id: 3,
      nome: 'sale',
      qta: null,
      unita_misura: 'qb',
      createdAt: '2021-10-05T19:30:39.615Z',
    },
    {
      id: 4,
      nome: 'pane',
      qta: 50,
      unita_misura: 'g',
      createdAt: '2021-10-05T19:30:39.616Z',
    },
  ],
}

describe('DolciController', () => {
  let controller: DolciController;
  let dolciService;

  beforeEach(() => {
    dolciService = {
      findAll: jest.fn().mockResolvedValue(dolci),
      findOne: jest.fn(() => dolceById),
    }
  })

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DolciController],
      providers: [{ useValue: dolciService, provide: DolciService}],
    })
      .compile();

    controller = module.get<DolciController>(DolciController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {

    it.skip('should call service', async () => {
      console.info([ await controller.findAll() ]);
    });

    it('should return service result', async () => {
      await controller.findAll();
      expect(dolciService.findAll).toHaveBeenCalled();
      expect(dolciService.findAll).toHaveBeenCalledTimes(1);
      expect(dolciService.findAll).toHaveBeenCalledWith();
    });
  });
});
