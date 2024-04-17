import { PartialType } from '@nestjs/mapped-types';
import { CreatePerosonaDto } from './create-perosona.dto';

export class UpdatePerosonaDto extends PartialType(CreatePerosonaDto) {}
