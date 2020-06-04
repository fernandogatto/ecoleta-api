import { Request, Response, Router } from 'express';

import ListItemsService from '@modules/items/services/ListItemsService';

const itemsRouter = Router();

itemsRouter.get('/', async (request: Request, response: Response) => {
  const listItems = new ListItemsService();

  const items = await listItems.execute();

  const serialedItems = items.map(item => {
    return {
      id: item.id,
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });

  return response.json(serialedItems);
});

export default itemsRouter;
