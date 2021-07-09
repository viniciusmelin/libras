import { FieldEntity, ContractEntity } from 'src/lib/domain/entities';
import {
  BankType,
  PrimaryCallType,
} from '../../../../domain/entities/entitiesType';
import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'contracts' })
export class Contract implements ContractEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id?: string;

  @Column('varchar')
  name!: string;

  @Column()
  description!: string;

  @Column('varchar', { name: 'startpoint', nullable: true })
  startPoint?: string;

  @Column('varchar', { name: 'endpoint', nullable: true })
  endPoint?: string;

  @Column({ type: 'varchar', enum: BankType })
  bankType!: BankType;

  @Column('varchar')
  version!: string;

  @Column({ type: 'varchar', enum: PrimaryCallType })
  primaryCallType!: PrimaryCallType;

  @Column({
    array: true,
    type: 'jsonb',
  })
  fields!: FieldEntity[];

  @Column({ default: Date.now() })
  createdAt?: Date;

  @Column()
  updatedAt?: Date;
}
