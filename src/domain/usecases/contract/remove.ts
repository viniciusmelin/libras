import { ContractEntity } from '../../entities';

export interface Remove {
  remove(id: string): Promise<ContractEntity>;
}
