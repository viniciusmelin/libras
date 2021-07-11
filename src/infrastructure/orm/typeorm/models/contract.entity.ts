import { FieldEntity, ContractEntity } from 'src/domain/entities';
import { BankType, PrimaryCallType } from '../../../../domain/entitiesType';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field } from './field.entity';

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
    type: 'jsonb',
    array: false,
    nullable: false,
  })
  fields!: FieldEntity[];

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;

  @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  updatedAt?: Date;
}
