import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContractEntity } from '../../domain/entities';
import { Create, Update } from '../../domain/usecases/contract';
import { Save } from '../../domain/usecases/contract/save';
import { Contract } from '../../infrastructure/orm/typeorm/models/contract.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContractService implements Create, Save, Update {
  constructor(
    @InjectRepository(Contract)
    private contractsRepository: Repository<Contract>,
  ) {}

  async save(entity: ContractEntity): Promise<ContractEntity> {
    return this.contractsRepository.save(entity);
  }
  async create(entity: ContractEntity): Promise<ContractEntity> {
    const newContract = await this.contractsRepository.create(entity);
    return newContract;
  }
  async update(
    id: string,
    entity: Partial<ContractEntity>,
  ): Promise<ContractEntity> {
    const contract = await this.contractsRepository.update({ id }, entity);
    return contract.raw;
  }

  async get(): Promise<Contract[]> {
    return this.contractsRepository.find();
  }
}
