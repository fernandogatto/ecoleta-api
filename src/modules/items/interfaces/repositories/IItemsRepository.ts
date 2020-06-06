import Item from "../../infra/typeorm/entities/Item";
import ICreateItemDTO from "../dtos/ICreateItemDTO";

export default interface IItemsRepository {
  create({ title, image }: ICreateItemDTO): Promise<Item>;
  findAllItems(): Promise<Item[] | undefined>;
  findItemById(id: string): Promise<Item | undefined>;
  findItemByTitle(id: string): Promise<Item | undefined>;
  findItemsByPointId(point_id: string): Promise<Item[] | undefined>;
  findAllItemById(items: Array<string>): Promise<Item[]>;
}
