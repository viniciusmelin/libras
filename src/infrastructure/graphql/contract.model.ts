import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FieldEntity, ContractEntity } from 'src/domain/entities';
import { BankType, PrimaryCallType } from '../../domain/entitiesType';
import { Fields } from './field.model';
import './enums.model';

@ObjectType('Contract')
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

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
