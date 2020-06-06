import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreatePointService from '@modules/points/services/CreatePointService';
import ShowPointService from '@modules/points/services/ShowPointService';
import ListItemsByPointService from '@modules/items/services/ListItemsByPointService';
import ListPointsByItemService from '@modules/points/services/ListPointsByItemService';

class PointsController {
  public async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    const createPoint = container.resolve(CreatePointService);

    const point = await createPoint.execute({
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    });

    return response.json(point);
  }

  public async index(request: Request, response: Response) {
    const { city, uf, items } = request.query;

    const parsedItems = String(items)
      .split(',')
      .map(item => item.trim());

    const listPoints = container.resolve(ListPointsByItemService);

    const points = await listPoints.execute({
      items: parsedItems,
      city: String(city),
      uf: String(uf),
    });

    return response.json(points);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    const showPoint = container.resolve(ShowPointService);
    const listItems = container.resolve(ListItemsByPointService);

    const point = await showPoint.execute(id);
    const items = await listItems.execute(id);

    return response.json({point, items});
  }
}

export default PointsController;
