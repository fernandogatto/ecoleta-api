import { injectable, inject } from 'tsyringe'
import { getRepository } from 'typeorm';

import IItemsRepository from '../interfaces/repositories/IItemsRepository';

import Item from '../infra/typeorm/entities/Item';

@injectable()
class ListItemsService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository
  ) {}

  public async execute(): Promise<Item[] | undefined> {
    const items = await this.itemsRepository.findAllItems();

    return items;
  }
}

export default ListItemsService;
