import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreatePoints1591151844658 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'points',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'image',
              type: 'varchar',
            },
            {
              name: 'name',
              type: 'varchar',
            },
            {
              name: 'email',
              type: 'varchar',
            },
            {
              name: 'whatsapp',
              type: 'varchar',
            },
            {
              name: 'latitude',
              type: 'decimal',
            },
            {
              name: 'longitude',
              type: 'decimal',
            },
            {
              name: 'city',
              type: 'varchar',
            },
            {
              name: 'uf',
              type: 'varchar',

            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            }
          ]
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('points');
    }

}
