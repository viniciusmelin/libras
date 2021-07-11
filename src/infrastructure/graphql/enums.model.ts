import { registerEnumType } from '@nestjs/graphql';
import {
  BankType,
  FieldType,
  PrimaryCallType,
  PuppeteerComponentType,
} from '../../domain/entitiesType';

registerEnumType(BankType, {
  name: 'BankType',
});

registerEnumType(FieldType, {
  name: 'FieldType',
});

registerEnumType(PrimaryCallType, {
  name: 'PrimaryCallType',
});

registerEnumType(PuppeteerComponentType, {
  name: 'PuppeteerComponentType',
});
