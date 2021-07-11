import { ContractEntity } from '../../entities';

export interface Create {
  create(entity: ContractEntity): Promise<ContractEntity>;
}
