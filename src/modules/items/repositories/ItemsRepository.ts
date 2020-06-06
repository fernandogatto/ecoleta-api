import { Repository, getRepository } from 'typeorm';

import IItemsRepository from '../interfaces/repositories/IItemsRepository';
import Item from '../infra/typeorm/entities/Item';
import PointItems from '@modules/point_items/infra/typeorm/entities/PointItems';

class ItemsRepository implements IItemsRepository {
  private itemsRepository: Repository<Item>;
  private pointItemsRepository: Repository<PointItems>;

  constructor()  {
    this.itemsRepository = getRepository(Item);
    this.pointItemsRepository = getRepository(PointItems);
  }

  public async findAllItems(): Promise<Item[] | undefined> {
    const items = await this.itemsRepository.find();

    return items;
  }

  public async findItemById(id: string): Promise<Item | undefined> {
    const item = await this.itemsRepository.findOne(id);

    return item;
  }

  public async findItemsByPointId(point_id: string): Promise<Item[] | undefined> {
    const pointItems = await this.pointItemsRepository.find({
      relations: ['item'],
      where: { point_id },
    });

    const items = pointItems.map(point_item => point_item.item);

    return items;
  }
}

export default ItemsRepository;
