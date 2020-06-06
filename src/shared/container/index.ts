import { container } from 'tsyringe';

import IItemsRepository from '@modules/items/interfaces/repositories/IItemsRepository';
import ItemsRepository from '@modules/items/repositories/ItemsRepository';

container.registerSingleton<IItemsRepository>(
  'ItemsRepository',
  ItemsRepository,
);

// container.registerSingleton<IPointsRepository>(
//   'PointsRepository',
//   PointsRepository,
// );
