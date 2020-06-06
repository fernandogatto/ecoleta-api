import { getRepository, createQueryBuilder } from "typeorm";

import PointItems from "../infra/typeorm/entities/PointItems";
import Item from "@modules/items/infra/typeorm/entities/Item";

class ListItemsByPointService {
  public async execute(point_id: string): Promise<Item[]> {
    const pointItemsRepository = getRepository(PointItems);

    const pointItems = await pointItemsRepository.find({
      relations: ['item'],
      where: { point_id },
    });

    const items = pointItems.map(point_item => point_item.item);

    return items;
  }
}

export default ListItemsByPointService;
