import { Test, TestingModule } from '@nestjs/testing';
import { PerosonasController } from './perosonas.controller';
import { PerosonasService } from './perosonas.service';

describe('PerosonasController', () => {
  let controller: PerosonasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerosonasController],
      providers: [PerosonasService],
    }).compile();

    controller = module.get<PerosonasController>(PerosonasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
