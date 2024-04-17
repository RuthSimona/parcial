import { Module } from '@nestjs/common';
import { PerosonasService } from './perosonas.service';
import { PerosonasController } from './perosonas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Perosona } from './entities/perosona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Perosona])],
  controllers: [PerosonasController],
  providers: [PerosonasService],
})
export class PerosonasModule {}
