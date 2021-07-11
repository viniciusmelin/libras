import { Field, InputType } from '@nestjs/graphql';
import { FieldType } from '../../../domain/entitiesType';
import { StepInputs } from './StepInputs.input';

@InputType()
export class FieldsInputs {
  @Field(() => String)
  mapping!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  defaultValue?: string;

  @Field(() => FieldType)
  fieldType!: FieldType;

  @Field(() => Boolean)
  required!: boolean;

  @Field(() => String)
  name!: string;

  @Field(() => [StepInputs])
  public puppeteer?: StepInputs[];

  @Field(() => String, { nullable: true })
  api?: string;
}
