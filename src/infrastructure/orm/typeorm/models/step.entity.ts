import { StepEntity } from 'src/domain/entities';
import { Column } from 'typeorm';

export class Step implements StepEntity {
  @Column('varchar')
  sequence!: number;
  @Column('varchar')
  query!: string;
  @Column('varchar')
  component!: string;
  @Column('varchar')
  wait!: number;
}
