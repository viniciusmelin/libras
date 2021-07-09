import { FieldType } from './entitiesType';

export interface FieldEntity {
  name: string;
  mapping: string;
  description?: string;
  defaultValue?: string;
  puppeteer?: string;
  api?: string;
  fieldType: FieldType;
  required: boolean;
}
