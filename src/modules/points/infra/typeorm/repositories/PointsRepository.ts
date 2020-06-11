import { Repository, getRepository } from "typeorm";

import IPointsRepository from '@modules/points/interfaces/repositories/IPointsRepository';
import ICreatePointsDTO from "@modules/points/interfaces/dtos/ICreatePointsDTO";


import Point from "../entities/Point";
import IFindPointByLatLonDTO from "@modules/points/interfaces/dtos/IFindPointByLatLonDTO";
import IFindAllFilteredPointsDTO from "@modules/points/interfaces/dtos/IFindAllFilteredPointsDTO";

class PointsRepository implements IPointsRepository {
  private pointsRepository: Repository<Point>;

  constructor() {
    this.pointsRepository = getRepository(Point);
  }

  public async create({
    image, name, email, whatsapp, latitude, longitude, city, uf, items_id
  }: ICreatePointsDTO): Promise<Point> {
    const point = this.pointsRepository.create({
      image,
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

  public async findPointById(id: string): Promise<Point | undefined> {
    const point = await this.pointsRepository.findOne(id);

    delete point?.point_items;

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

  public async findAllFilteredPoints({
    city, uf, items
  }: IFindAllFilteredPointsDTO): Promise<Point[]> {
    const points = await this.pointsRepository.createQueryBuilder('points')
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

  public async findAllPoints(): Promise<Point[] | undefined> {
    const points = await this.pointsRepository.find();

    return points;
  }
}

export default PointsRepository;
