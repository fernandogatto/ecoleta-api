import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ListItemsService from '@modules/items/services/ListItemsService';

class ItemsController {
  public async index(request: Request, response: Response) {
    const listItems = container.resolve(ListItemsService);

    const items = await listItems.execute();

    const serialedItems = items?.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/tmp/uploads/${item.image}`,
      };
    });

    return response.json(serialedItems);
  }
}

export default ItemsController;
