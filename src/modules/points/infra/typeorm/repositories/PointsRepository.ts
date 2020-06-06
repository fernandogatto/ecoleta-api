import { Repository, getRepository } from "typeorm";

import IPointsRepository from '@modules/points/interfaces/repositories/IPointsRepository';
import ICreatePointsDTO from "@modules/points/interfaces/dtos/ICreatePointsDTO";


import Point from "../entities/Point";
import IFindPointByLatLonDTO from "@modules/points/interfaces/dtos/IFindPointByLatLonDTO";

class PointsRepository implements IPointsRepository {
  private pointsRepository: Repository<Point>;

  constructor() {
    this.pointsRepository = getRepository(Point);
  }

  public async create({
    name, email, whatsapp, latitude, longitude, city, uf, items_id
  }: ICreatePointsDTO): Promise<Point> {
    const point = this.pointsRepository.create({
      image: 'fake',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      point_items: items_id.map(item => ({
        item_id: item,
      })),
    });

    await this.pointsRepository.save(point);

    return point;
  }

  public async findPointByLatLon(
    { latitude, longitude }: IFindPointByLatLonDTO
  ): Promise<Point | undefined> {
    const point =  await this.pointsRepository.findOne({
      where: { latitude, longitude },
    });

    return point;
  }
}

export default PointsRepository;
