import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';

describe('CatsController', () => {
  let controller: CatsController;

  const mockCatsList: Cat[] = [
    { id: 1, url: 'https://cat-url.com', external_id: 'test_cat', score: 0 },
  ];

  const mockCatsService = {
    findAll: jest.fn((limit: number, orderByScore: string) => mockCatsList),

    findAllRandom: jest.fn((limit: number) => mockCatsList),

    findOne: jest.fn((id: number) => mockCatsList[0]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [{ provide: CatsService, useValue: mockCatsService }],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /', () => {
    it('should findAll when no options passed', () => {
      expect(controller.findAll({})).toBe(mockCatsList);
      expect(mockCatsService.findAll).toHaveBeenCalledWith(
        undefined,
        undefined,
      );
    });

    it('should findAll when all options passed', () => {
      expect(controller.findAll({ limit: 1, orderByScore: 'ASC' })).toBe(
        mockCatsList,
      );
      expect(mockCatsService.findAll).toHaveBeenCalledWith(1, 'ASC');
    });

    it('should findAll when limit passed', () => {
      expect(controller.findAll({ limit: 1 })).toBe(mockCatsList);
      expect(mockCatsService.findAll).toHaveBeenCalledWith(1, undefined);
    });

    it('should findAll when orderByScore passed', () => {
      expect(controller.findAll({ orderByScore: 'DESC' })).toBe(mockCatsList);
      expect(mockCatsService.findAll).toHaveBeenCalledWith(undefined, 'DESC');
    });
  });

  describe('GET /random', () => {
    it('should findAllRandom when no options passed', () => {
      expect(controller.findAllRandom({})).toBe(mockCatsList);
      expect(mockCatsService.findAllRandom).toHaveBeenCalledWith(undefined);
    });

    it('should findAllRandom when limit passed', () => {
      expect(controller.findAllRandom({ limit: 1 })).toBe(mockCatsList);
      expect(mockCatsService.findAllRandom).toHaveBeenCalledWith(1);
    });
  });

  describe('GET /:id', () => {
    it('should findOne', () => {
      expect(controller.findOne('1')).toBe(mockCatsList[0]);
      expect(mockCatsService.findOne).toHaveBeenCalledWith(1);
    });
  });
});
