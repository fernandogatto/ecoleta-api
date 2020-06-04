import { getRepository } from 'typeorm';

import Point from '../infra/typeorm/entities/Point';

import AppError from '@shared/errors/AppError';

class ShowPointService {
  public async execute(id: string): Promise<Point> {
    const pointsRepository = getRepository(Point);

    const point = await pointsRepository.findOne(id);

    if(!point) {
      throw new AppError('Point not found');
    }

    return point;
  }
}

export default ShowPointService;
