import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Item from '../infra/typeorm/entities/Item';
import IItemsRepository from '../interfaces/repositories/IItemsRepository';

interface IRequest {
  title: string;
  image: string;
}

@injectable()
class CreateItemService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository,
  ) {}

  public async execute({ title, image }: IRequest): Promise<Item> {
    const checkItemExists = await this.itemsRepository.findItemByTitle(title);

    if (checkItemExists) throw new AppError('Item already exists');

    const item = await this.itemsRepository.create({
      title,
      image,
    });

    return item;
  }
}

export default CreateItemService;
