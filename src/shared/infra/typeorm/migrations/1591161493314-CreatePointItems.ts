import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreatePointItems1591161493314 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'point_items',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'point_id',
            type: 'uuid',
          },
          {
            name: 'item_id',
            type: 'uuid',
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

    await queryRunner.createForeignKey(
      'point_items',
      new TableForeignKey({
        name: 'PointToItem',
        columnNames: ['point_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'points',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'point_items',
      new TableForeignKey({
        name: 'ItemToPoint',
        columnNames: ['item_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'items',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('point_items', 'ItemToPoint');

    await queryRunner.dropForeignKey('point_items', 'PointToItem');

    await queryRunner.dropTable('point_items');
  }

}
