import { Field, ObjectType } from '@nestjs/graphql';
import { PuppeteerComponentType } from '../../domain/entitiesType';

import { StepEntity } from '../../domain/entities';

@ObjectType('Step')
export abstract class Steps implements StepEntity {
  @Field(() => Number)
  sequence!: number;
  @Field(() => String)
  query!: string;
  @Field(() => PuppeteerComponentType)
  component!: string;
  @Field(() => Number)
  wait!: number;
}
