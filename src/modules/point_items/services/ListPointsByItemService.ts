import { getRepository } from "typeorm";

import PointItems from "../infra/typeorm/entities/PointItems";
import Point from "@modules/points/infra/typeorm/entities/Point";

class ListPointsByItemService {
  public async execute(item_id: string): Promise<Point[]> {
    const pointItemsRepository = getRepository(PointItems);

    const pointItems = await pointItemsRepository.find({
      relations: ['point'],
      where: { item_id },
    });

    const points = pointItems.map(point_item => point_item.point);

    return points;
  }
}

export default ListPointsByItemService;
