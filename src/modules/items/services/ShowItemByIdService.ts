import { injectable, inject } from 'tsyringe';

import ItemsRepository from '../repositories/ItemsRepository';

import Item from '../infra/typeorm/entities/Item';

@injectable()
class ShowItemByIdService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: ItemsRepository,
  ) {}

  public async execute(item_id: string): Promise<Item | undefined> {
    const item = await this.itemsRepository.findItemById(item_id);

    return item;
  }
}

export default ShowItemByIdService;
