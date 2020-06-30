import FakeItemsRepository from '../infra/typeorm/repositories/fakes/FakeItemsRepository';

import ListItemsService from './ListItemsService';

let fakeItemsRepository: FakeItemsRepository;
let listItems: ListItemsService;

describe('ListItems', () => {
  beforeEach(() => {
    fakeItemsRepository = new FakeItemsRepository();

    listItems = new ListItemsService(fakeItemsRepository);
  });
});

it('should be able to list all items', async () => {
  const item1 = await fakeItemsRepository.create({
    title: 'Item 1',
    image: 'image',
  });

  const item2 = await fakeItemsRepository.create({
    title: 'Item 2',
    image: 'image',
  });

  const items = await listItems.execute();

  expect(items).toEqual([
    item1,
    item2,
  ]);
});
