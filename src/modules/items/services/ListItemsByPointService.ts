import { injectable, inject } from "tsyringe";

import IItemsRepository from "../interfaces/repositories/IItemsRepository";

import Item from "@modules/items/infra/typeorm/entities/Item";

@injectable()
class ListItemsByPointService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository
  ) {}

  public async execute(point_id: string): Promise<Item[] | undefined> {
    const items = await this.itemsRepository.findItemsByPointId(point_id);

    return items;
  }
}

export default ListItemsByPointService;
