import { ContractEntity } from '../../entities';

export interface Save {
  save(entity: ContractEntity): Promise<ContractEntity>;
}
