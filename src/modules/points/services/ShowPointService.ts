import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Point from '../infra/typeorm/entities/Point';

import IPointsRepository from '../interfaces/repositories/IPointsRepository';

@injectable()
class ShowPointService {
  constructor(
    @inject('PointsRepository')
    private pointsRepository: IPointsRepository,
  ) {}

  public async execute(id: string): Promise<Point> {
    const point = await this.pointsRepository.findPointById(id);

    if(!point) {
      throw new AppError('Point not found');
    }

    return point;
  }
}

export default ShowPointService;
