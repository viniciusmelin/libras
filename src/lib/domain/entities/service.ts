import { BankType, PrimaryCallType, Timestamp } from './entitiesType';
import { FieldEntity } from './field';

export interface ContractEntity extends Timestamp {
  id?: string;
  name: string;
  description: string;
  startPoint?: string;
  endPoint?: string;
  bankType: BankType;
  version: string;
  primaryCallType: PrimaryCallType;
  fields: FieldEntity[];
}
