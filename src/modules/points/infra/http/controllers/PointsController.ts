
import { Request, Response } from 'express';

import CreatePointService from '@modules/points/services/CreatePointService';
import ShowPointService from '@modules/points/services/ShowPointService';

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

    const createPoint = new CreatePointService();

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

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    const showPoint = new ShowPointService();

    const point = await showPoint.execute(id);

    return response.json(point);
  }
}

export default PointsController;
