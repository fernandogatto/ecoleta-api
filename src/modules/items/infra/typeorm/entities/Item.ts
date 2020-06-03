import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import PointItems from '@modules/point_items/infra/typeorm/entities/PointItems';

@Entity('items')
class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  image: string;

  @Column()
  title: string;

  @OneToMany(() => PointItems, point_items => point_items.item)
  point_items: PointItems

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Item;
