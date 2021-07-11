import { Field, InputType } from '@nestjs/graphql';
import { PuppeteerComponentType } from '../../../domain/entitiesType';

@InputType()
export class StepInputs {
  @Field(() => Number)
  sequence!: number;
  @Field(() => String)
  query!: string;
  @Field(() => PuppeteerComponentType)
  component!: string;
  @Field(() => Number)
  wait!: number;
}
