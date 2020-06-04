import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import PointItems from '@modules/point_items/infra/typeorm/entities/PointItems';
import Point from '../infra/typeorm/entities/Point';
import Item from '@modules/items/infra/typeorm/entities/Item';

import CreatePointItemsService from '@modules/point_items/services/CreatePointItems';

interface Request {
  name: string;
  email: string;
  whatsapp: string;
  latitude: number;
  longitude: number;
  city: string;
  uf: string;
  items: Array<string>;
}

class CreatePointService {
  public async execute({
    name, email, whatsapp, latitude, longitude, city, uf, items
  }: Request): Promise<Point> {
    const pointsRepository = getRepository(Point);

    const emailExists = await pointsRepository.findOne({
      where: { email },
    });

    if(emailExists) {
      throw new AppError('This email already exists');
    }

    const pointExists = await pointsRepository.findOne({
      where: { latitude, longitude },
    });

    if(pointExists) {
      throw new AppError('This point already exists');
    }

    const point = pointsRepository.create({
      image: 'fake',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    });

    await pointsRepository.save(point);

    items.map(async (item_id) => {
      const createPointItems = new CreatePointItemsService();

      const pointItems = await createPointItems.execute({item_id, point_id: point.id});
    });

    return point;
  }
}

export default CreatePointService;
