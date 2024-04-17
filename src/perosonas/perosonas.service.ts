import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePerosonaDto } from './dto/create-perosona.dto';
import { UpdatePerosonaDto } from './dto/update-perosona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Perosona } from './entities/perosona.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PerosonasService {
  constructor(@InjectRepository(Perosona) private perosonasRepository: Repository<Perosona>) {}

  async create(createPerosonaDto: CreatePerosonaDto): Promise<Perosona> {
    const { ci } = createPerosonaDto;
    const existe = await this.perosonasRepository.findOne({ where: { ci } });

    if (existe) {
      throw new ConflictException('La persona ya existe');
    }

    return this.perosonasRepository.save(createPerosonaDto);
  }

  async findAll(): Promise<Perosona[]> {
    return this.perosonasRepository.find();
  }

  async findOne(id: number): Promise<Perosona> {
    const perosona = await this.perosonasRepository.findOne({
      where: { id },
    });
    if (!perosona) {
      throw new NotFoundException(`La persona ${id} no existe`);
    }
    return perosona;
  }

  async update(id: number, updatePerosonaDto: UpdatePerosonaDto): Promise<Perosona> {
    const perosona = await this.findOne(id);
    const perosonaUpdate = Object.assign(perosona, updatePerosonaDto);
    return this.perosonasRepository.save(perosonaUpdate);
  }

  async remove(id: number): Promise<void> {
    const perosona = await this.findOne(id);
    await this.perosonasRepository.remove(perosona);
  }
}


