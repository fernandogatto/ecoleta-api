import { Request, Response, Router } from 'express';

import CreatePointService from '@modules/points/services/CreatePointService';

const pointsRouter = Router();

pointsRouter.post('/', async (request: Request, response: Response) => {
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
});



export default pointsRouter;
