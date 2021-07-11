import { FieldEntity, StepEntity } from 'src/domain/entities';
import { FieldType } from '../../../../domain/entitiesType';
import { Column } from 'typeorm';

export class Field implements FieldEntity {
  @Column('varchar')
  name!: string;
  @Column('varchar')
  description?: string | undefined;
  @Column('varchar', { nullable: true })
  mapping!: string;
  @Column('varchar', { nullable: true })
  defaultValue?: string | undefined;
  @Column({
    type: 'jsonb',
    array: false,
    nullable: true,
  })
  puppeteer?: StepEntity[];
  @Column('varchar')
  api?: string | undefined;
  @Column('varchar')
  fieldType!: FieldType;
  @Column('bool')
  required!: boolean;
}
