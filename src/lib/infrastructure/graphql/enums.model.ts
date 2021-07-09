import { registerEnumType } from '@nestjs/graphql';
import {
  BankType,
  FieldType,
  PrimaryCallType,
} from '../../../lib/domain/entities/entitiesType';

registerEnumType(BankType, {
  name: 'BankType',
});

registerEnumType(FieldType, {
  name: 'FieldType',
});

registerEnumType(PrimaryCallType, {
  name: 'PrimaryCallType',
});
