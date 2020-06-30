import FakePointsRepository from '../infra/typeorm/repositories/fakes/FakePointsRepository';
import FakeItemsRepository from '@modules/items/infra/typeorm/repositories/fakes/FakeItemsRepository';

import CreatePointService from './CreatePointService';
import AppError from '@shared/errors/AppError';

let fakePointsRepository: FakePointsRepository;
let fakeItemsRepository: FakeItemsRepository;
let createPoint: CreatePointService;

describe('CreateItem', () => {
  beforeEach(() => {
    fakePointsRepository = new FakePointsRepository();

    createPoint = new CreatePointService(
      fakePointsRepository,
      fakeItemsRepository,
    );
  });
});

it('should be able to create a point', async () => {
  const point = await createPoint.execute({
    image: 'image',
    name: 'Test',
    email: 'test@email.com',
    whatsapp: 'whatsapp',
    latitude: 10,
    longitude: 10,
    city: 'Cidade',
    uf: 'UF',
    items: ['item-id'],
  });

  expect(point).toHaveProperty('id');
});

it('should not be able to create a point with same latitude and longitude of another', async () => {
  await createPoint.execute({
    image: 'image',
    name: 'Test',
    email: 'test@email.com',
    whatsapp: 'whatsapp',
    latitude: 10,
    longitude: 10,
    city: 'Cidade',
    uf: 'UF',
    items: ['item-id'],
  });

  await expect(
    createPoint.execute({
      image: 'image',
      name: 'Test',
      email: 'test@email.com',
      whatsapp: 'whatsapp',
      latitude: 10,
      longitude: 10,
      city: 'Cidade',
      uf: 'UF',
      items: ['item-id'],
    }),
  ).rejects.toBeInstanceOf(AppError);
})
