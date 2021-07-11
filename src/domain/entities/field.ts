import { FieldType } from '../entitiesType';
import { StepEntity } from './step';

export interface FieldEntity {
  name: string;
  mapping: string;
  description?: string;
  defaultValue?: string;
  puppeteer?: StepEntity[];
  api?: string;
  fieldType: FieldType;
  required: boolean;
}
