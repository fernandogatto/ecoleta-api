import { getRepository } from 'typeorm';

import Item from '../infra/typeorm/entities/Item';

class ShowItemByIdService {
  public async execute(item_id: string): Promise<Item | undefined> {
    const itemsRepository = getRepository(Item);

    const item = await itemsRepository.findOne(item_id);

    return item;
  }
}

export default ShowItemByIdService;
