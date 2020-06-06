import { getRepository } from "typeorm";

import PointItems from "../infra/typeorm/entities/PointItems";
import Point from "@modules/points/infra/typeorm/entities/Point";

interface Request {
  items: string[];
  city: string;
  uf: string;
}

class ListPointsByItemService {
  public async execute({ items, city, uf }: Request): Promise<Point[]> {
    const pointsRepository = getRepository(Point);

    const points = await pointsRepository.createQueryBuilder('points')
    .innerJoin(
      'points.point_items',
      'point_items',
      'point_items.item_id IN (:...items)',
      { items },
    )
    .where('points.uf = :uf', { uf })
    .where('points.city = :city', { city })
    .getMany();

    return points;
  }
}

export default ListPointsByItemService;
