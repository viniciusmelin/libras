import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableContract1626030563450 implements MigrationInterface {
    name = 'CreateTableContract1626030563450'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contracts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "startpoint" character varying, "endpoint" character varying, "bankType" character varying NOT NULL, "version" character varying NOT NULL, "primaryCallType" character varying NOT NULL, "fields" jsonb NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2c7b8f3a7b1acdd49497d83d0fb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "contracts"`);
    }

}
