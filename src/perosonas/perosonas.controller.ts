import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreatePerosonaDto } from './dto/create-perosona.dto';
import { UpdatePerosonaDto } from './dto/update-perosona.dto';
import { PerosonasService } from './perosonas.service';
import { Perosona } from './entities/perosona.entity';

@Controller('api/v1/personas')
export class PerosonasController {
  constructor(private readonly perosonasService: PerosonasService) {}

  @Post()
  create(@Body() createPerosonaDto: CreatePerosonaDto): Promise<Perosona> {
    return this.perosonasService.create(createPerosonaDto);
  }

  @Get()
  findAll(): Promise<Perosona[]> {
    return this.perosonasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Perosona> {
    return this.perosonasService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePerosonaDto: UpdatePerosonaDto): Promise<Perosona> {
    return this.perosonasService.update(+id, updatePerosonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.perosonasService.remove(+id);
  }
}

