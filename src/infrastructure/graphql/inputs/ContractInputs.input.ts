import { Field, InputType } from '@nestjs/graphql';
import { BankType, PrimaryCallType } from '../../../domain/entitiesType';
import { FieldsInputs } from './FieldsInputs.input';

@InputType()
export class ContractCreateInput {
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

  @Field(() => [FieldsInputs])
  public fields!: FieldsInputs[];

  @Field(() => PrimaryCallType)
  primaryCallType!: PrimaryCallType;
}
