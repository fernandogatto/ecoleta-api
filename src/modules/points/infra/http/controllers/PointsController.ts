
import { Request, Response } from 'express';

import CreatePointService from '@modules/points/services/CreatePointService';

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
}

export default PointsController;
