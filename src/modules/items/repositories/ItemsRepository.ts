import { Repository, getRepository } from 'typeorm';

import IItemsRepository from '../interfaces/repositories/IItemsRepository';
import ICreateItemDTO from '../interfaces/dtos/ICreateItemDTO';

import Item from '../infra/typeorm/entities/Item';
import PointItems from '@modules/point_items/infra/typeorm/entities/PointItems';

class ItemsRepository implements IItemsRepository {
  private itemsRepository: Repository<Item>;
  private pointItemsRepository: Repository<PointItems>;

  constructor()  {
    this.itemsRepository = getRepository(Item);
    this.pointItemsRepository = getRepository(PointItems);
  }

  public async create({ title, image }: ICreateItemDTO): Promise<Item> {
    const item = this.itemsRepository.create({
      title,
      image,
    });

    await this.itemsRepository.save(item);

    return item;
  }

  public async findAllItems(): Promise<Item[] | undefined> {
    const items = await this.itemsRepository.find();

    return items;
  }

  public async findItemById(id: string): Promise<Item | undefined> {
    const item = await this.itemsRepository.findOne(id);

    return item;
  }

  public async findItemByTitle(title: string): Promise<Item | undefined> {
    const item = await this.itemsRepository.findOne({
      where: { title },
    });

    return item;
  }

  public async findItemsByPointId(point_id: string): Promise<Item[] | undefined> {
    // const pointItems = await this.pointItemsRepository.find({
    //   relations: ['item'],
    //   where: { point_id },
    // });

    // const items = pointItems.map(point_item => point_item.item);

    const items = this.itemsRepository
      .createQueryBuilder('items')
      .select('items.title')
      .innerJoin('items.point_items', 'point_items')
      .where('point_items.point_id = :id', { point_id })
      .getMany();

    return items;
  }
}

export default ItemsRepository;
