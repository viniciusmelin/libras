export interface Timestamp {
  createdAt?: Date;
  updatedAt?: Date;
}

export enum BankType {
  BRADESCO = 'bradesco',
  ITAU = 'Itau',
  SANTANDER = 'Santander',
}

export enum FieldType {
  TEXT = 'text',
  INT = 'int',
  DECIMAL = 'decimal',
  BOOL = 'boolean',
  DATE = 'date',
}

export enum PrimaryCallType {
  PUPPETEER = 'puppeteer',
  API = 'api',
}
