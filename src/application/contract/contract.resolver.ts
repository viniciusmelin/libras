import { Args, Mutation, Query, Resolver, ID } from '@nestjs/graphql';
import { ContractCreateInput } from '../../infrastructure/graphql/inputs/ContractInputs.input';
import { Contract } from '../../infrastructure/graphql/contract.model';
import { ContractService } from './contract.service';
import { ContractEntity } from '../../domain/entities';

@Resolver(() => Contract)
export class ContractResolver {
  constructor(private contractService: ContractService) {}

  @Mutation(() => Contract)
  async create(
    @Args({ name: 'input', type: () => ContractCreateInput })
    entity: ContractEntity,
  ): Promise<Contract> {
    return this.contractService.save(entity);
  }

  @Query(() => [Contract], { nullable: true })
  async contracts(): Promise<Contract[]> {
    return this.contractService.get();
  }

  @Mutation(() => Contract)
  async update(
    @Args({ name: 'id', type: () => ID })
    id: string,
    @Args({ name: 'input', type: () => ContractCreateInput })
    entity: ContractEntity,
  ): Promise<Contract> {
    return this.contractService.update(id, entity);
  }
}
