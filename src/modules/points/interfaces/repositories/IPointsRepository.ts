import ICreatePointsDTO from '../dtos/ICreatePointsDTO';
import IUpdatePointDTO from '../dtos/IUpdatePointDTO';
import IFindPointByLatLonDTO from '../dtos/IFindPointByLatLonDTO';
import IFindAllFilteredPointsDTO from '../dtos/IFindAllFilteredPointsDTO';

import Point from '@modules/points/infra/typeorm/entities/Point';

export default interface IPointsInterface {
  create(data: ICreatePointsDTO): Promise<Point>;
  // update(data: IUpdatePointDTO): Promise<Point>;
  // delete(point: Point): Promise<void>;
  findPointById(id: string): Promise<Point | undefined>;
  findPointByLatLon(data: IFindPointByLatLonDTO): Promise<Point | undefined>;
  findAllFilteredPoints(data: IFindAllFilteredPointsDTO): Promise<Point[]>;
  // findAllPoints(): Promise<Point[] | undefined>;
}
