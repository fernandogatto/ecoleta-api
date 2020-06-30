import FakeItemsRepository from '../infra/typeorm/repositories/fakes/FakeItemsRepository';

import CreateItemService from './CreateItemService';

import AppError from '@shared/errors/AppError';

let fakeItemsRepository: FakeItemsRepository;
let createItem: CreateItemService;

describe('CreateItem', () => {
  beforeEach(() => {
    fakeItemsRepository = new FakeItemsRepository();

    createItem = new CreateItemService(fakeItemsRepository);
  });
});

it('should be able to create an item', async () => {
  const item = await createItem.execute({
    title: 'Test',
    image: 'image',
  });

  expect(item).toHaveProperty('id');
});

it('should not be able to create an item with same title of another', async () => {
  await createItem.execute({
    title: 'Test',
    image: 'image'
  });

  await expect(
    createItem.execute({
      title: 'Test',
      image: 'image',
    }),
  ).rejects.toBeInstanceOf(AppError);
});
