import { Test, TestingModule } from '@nestjs/testing';
import { PerosonasService } from './perosonas.service';

describe('PerosonasService', () => {
  let service: PerosonasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerosonasService],
    }).compile();

    service = module.get<PerosonasService>(PerosonasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
