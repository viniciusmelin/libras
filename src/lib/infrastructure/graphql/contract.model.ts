import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FieldEntity, ContractEntity } from 'src/lib/domain/entities';
import { BankType, PrimaryCallType } from '../../domain/entities/entitiesType';
import { Fields } from './field.model';
import './enums.model';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

@ObjectType('Service')
export abstract class Contract implements ContractEntity {
  @Field(() => ID)
  public id?: string;

  @Field(() => String)
  description!: string;

  @Field(() => BankType)
  bankType!: BankType;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  version!: string;

  @Field(() => String, { nullable: true })
  startPoint?: string;

  @Field(() => String, { nullable: true })
  endPoint?: string;

  @Field(() => [Fields])
  fields!: FieldEntity[];

  @Field(() => PrimaryCallType)
  primaryCallType!: PrimaryCallType;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt?: Date;
}
