import { Field, ObjectType } from '@nestjs/graphql';

import { FieldEntity, StepEntity } from '../../domain/entities';
import { FieldType } from '../../domain/entitiesType';
import { Steps } from './step.model';

@ObjectType('Field')
export abstract class Fields implements FieldEntity {
  @Field(() => String, { nullable: true })
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

  @Field(() => [Steps], { nullable: true })
  puppeteer?: StepEntity[];

  @Field(() => String, { nullable: true })
  api?: string;
}
