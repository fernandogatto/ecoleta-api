import { getRepository, Transaction } from 'typeorm';

import AppError from '@shared/errors/AppError';

import PointItems from '../infra/typeorm/entities/PointItems';
import Point from '@modules/points/infra/typeorm/entities/Point';
import Item from '@modules/items/infra/typeorm/entities/Item';

interface Request {
  point_id: string;
  item_id: string;
}

class CreatePointItemsService {
  public async execute({ point_id, item_id }: Request): Promise<PointItems> {
    const pointItemsRepository = getRepository(PointItems);
    const pointsRepository = getRepository(Point);
    const itemsRepository = getRepository(Item);

    const pointExists = await pointsRepository.findOne({
      where: { id: point_id },
    });

    if(!pointExists) {
      throw new AppError('Point not found');
    }

    const itemExists = await itemsRepository.findOne({
      where: { id: item_id },
    });

    if(!itemExists) {
      throw new AppError('Item not found');
    }

    const pointItemsExists = await pointItemsRepository.findOne({
      where: { point_id, item_id },
    });

    if(pointItemsExists) {
      throw new AppError('This point already exists');
    }

    const pointItems = pointItemsRepository.create({
      point_id,
      item_id,
    });

    await pointItemsRepository.save(pointItems);

    return pointItems;
  }
}

export default CreatePointItemsService;
