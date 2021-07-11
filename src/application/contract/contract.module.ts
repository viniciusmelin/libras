import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractResolver } from './contract.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contract } from '../../infrastructure/orm/typeorm/models/contract.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contract])],
  exports: [TypeOrmModule],
  providers: [ContractService, ContractResolver],
})
export class ContractModule {}
