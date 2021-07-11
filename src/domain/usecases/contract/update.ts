import { ContractEntity } from '../../entities';

export interface Update {
  update(id: string, entity: Partial<ContractEntity>): Promise<ContractEntity>;
}
