import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
@Entity('perosonas')

export class Perosona {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar', { length: 100 })
  ci: string;

  @Column('varchar', { length: 50})
  nombres: string;

  @Column('varchar', { length: 50 })
  primer_apellido: string;

  @Column('varchar', { length: 50 })
  segundo_apellido: string;

  @Column()
  fecha_nacimiento: Date;
}



