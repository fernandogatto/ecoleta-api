import IItemsRepository from '@modules/items/interfaces/repositories/IItemsRepository';
import ICreateItemDTO from '@modules/items/interfaces/dtos/ICreateItemDTO';

import Item from '../../entities/Item';

class FakeItemsRepository implements IItemsRepository {
  private items: Item[] = [];

  public async create({ title, image }: ICreateItemDTO): Promise<Item> {
    const item = new Item();

    Object.assign(item, {
      title,
      image,
    });

    this.items.push(item);

    return item;
  }

  public async findAllItems(): Promise<Item[] | undefined> {
    return this.items;
  }

  public async findItemById(id: string): Promise<Item | undefined> {
    const item = this.items.find(item => item.id === id);

    return item;
  }

  public async findItemByTitle(title: string): Promise<Item | undefined> {
    const item = this.items.find(item => item.title === title);

    return item;
  }

  public async findItemsByPointId(point_id: string): Promise<Item[] | undefined> {
    return this.items;
  }

  public async findAllItemsById(items: Array<string>): Promise<Item[]> {
    return this.items;
  }
}

export default FakeItemsRepository;
