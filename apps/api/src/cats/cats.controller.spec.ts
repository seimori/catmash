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
    findAll: (limit: number, orderByScore: string) => mockCatsList,
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

  it('should findAll', () => {
    expect(controller.findAll({ limit: 1, orderByScore: 'ASC' })).toBe(
      mockCatsList,
    );
  });
});
