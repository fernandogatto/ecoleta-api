import IPointsRepository from '@modules/points/interfaces/repositories/IPointsRepository';
import ICreatePointsDTO from "@modules/points/interfaces/dtos/ICreatePointsDTO";

import Point from "../../entities/Point";

import IFindPointByLatLonDTO from "@modules/points/interfaces/dtos/IFindPointByLatLonDTO";
import IFindAllFilteredPointsDTO from "@modules/points/interfaces/dtos/IFindAllFilteredPointsDTO";

class FakePointsRepository implements IPointsRepository {
  private points: Point[] = [];

  public async create({
    image,
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items_id,
  }: ICreatePointsDTO): Promise<Point> {
    const point = new Point();

    Object.assign(point, {
      image,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items_id,
    });

    this.points.push(point);

    return point;
  }

  public async findPointById(id: string): Promise<Point | undefined> {
    const point = this.points.find(point => point.id === id);

    return point;
  }

  public async findPointByLatLon(
    { latitude, longitude }: IFindPointByLatLonDTO
  ): Promise<Point | undefined> {
    const point = this.points.find(point => {
      point.latitude === latitude && point.longitude === longitude
    });

    return point;
  }

  public async findAllFilteredPoints({
    city, uf, items
  }: IFindAllFilteredPointsDTO): Promise<Point[]> {
    return this.points;
  }

  public async findAllPoints(): Promise<Point[] | undefined> {
    return this.points;
  }
}

export default FakePointsRepository;
