import { Field, ObjectType } from '@nestjs/graphql';

import { FieldEntity } from '../../../lib/domain/entities';
import { FieldType } from '../../../lib/domain/entities/entitiesType';

@ObjectType('Field')
export abstract class Fields implements FieldEntity {
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

  @Field(() => String, { nullable: true })
  puppeteer?: string;

  @Field(() => String, { nullable: true })
  api?: string;
}
