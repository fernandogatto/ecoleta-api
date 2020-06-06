import { container } from 'tsyringe';

import IItemsRepository from '@modules/items/interfaces/repositories/IItemsRepository';
import ItemsRepository from '@modules/items/infra/typeorm/repositories/ItemsRepository';

import IPointsRepository from '@modules/points/interfaces/repositories/IPointsRepository';
import PointsRepository from '@modules/points/infra/typeorm/repositories/PointsRepository';

container.registerSingleton<IItemsRepository>(
  'ItemsRepository',
  ItemsRepository,
);

container.registerSingleton<IPointsRepository>(
  'PointsRepository',
  PointsRepository,
);
