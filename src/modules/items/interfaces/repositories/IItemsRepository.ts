import Item from "../../infra/typeorm/entities/Item";

export default interface IItemsRepository {
  findAllItems(): Promise<Item[] | undefined>;
  findItemById(id: string): Promise<Item | undefined>;
  findItemsByPointId(point_id: string): Promise<Item[] | undefined>;
}
