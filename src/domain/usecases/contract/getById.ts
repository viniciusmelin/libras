import { ContractEntity } from '../../entities';

export interface GetById {
  getById(id: string): Promise<ContractEntity>;
}
