import { Query, Resolver } from '@nestjs/graphql';
import {
  BankType,
  PrimaryCallType,
  FieldType,
} from '../lib/domain/entities/entitiesType';
import { Contract } from '../lib/infrastructure/graphql/contract.model';

@Resolver()
export class ContractResolver {
  @Query(() => [Contract], { nullable: true })
  async contracts(): Promise<Contract[]> {
    return [
      {
        name: 'Santander',
        version: '1',
        id: '1',
        description: 'Serviço de envio de analise de crédito',
        bankType: BankType.SANTANDER,
        primaryCallType: PrimaryCallType.API,
        fields: [
          {
            name: 'comprador_nome',
            description: 'Nome do comprador',
            mapping: 'nome',
            required: true,
            fieldType: FieldType.TEXT,
          },
        ],
      },
    ];
  }
}
