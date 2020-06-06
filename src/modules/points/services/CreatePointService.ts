import { injectable, inject } from 'tsyringe';
import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Point from '../infra/typeorm/entities/Point';

import IPointsRepository from '../interfaces/repositories/IPointsRepository'
import IItemsRepository from '@modules/items/interfaces/repositories/IItemsRepository';
import ICreatePointsDTO from '../interfaces/dtos/ICreatePointsDTO';

interface IRequest {
  name: string;
  email: string;
  whatsapp: string;
  latitude: number;
  longitude: number;
  city: string;
  uf: string;
  items: Array<string>;
}

@injectable()
class CreatePointService {
  constructor(
    @inject('PointsRepository')
    private pointsRepository: IPointsRepository,

    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository,
  ) {}

  public async execute({
    name, email, whatsapp, latitude, longitude, city, uf, items
  }: IRequest): Promise<Point> {
    const itemsExists = await this.itemsRepository.findAllItemsById(items);

    if(items.length !== itemsExists.length) {
      throw new AppError('Item not found');
    }

    const pointExists = this.pointsRepository.findPointByLatLon({
      latitude,
      longitude,
    });

    if(pointExists) {
      throw new AppError('This point already exists');
    }

    const point = this.pointsRepository.create({
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items_id: items,
    });

    return point;
  }
}

export default CreatePointService;
