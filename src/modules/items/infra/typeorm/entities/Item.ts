import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BeforeInsert,
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

  @OneToMany(() => PointItems, pointItems => pointItems.item, {
    cascade: ['insert'],
  })
  point_items: PointItems[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  async setImage(image: string) {
    this.image = image;
  }

  @BeforeInsert()
  async setTitle(title: string) {
    this.title = title;
  }
}

export default Item;
