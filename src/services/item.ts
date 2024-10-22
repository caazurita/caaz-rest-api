import { ICar } from "../interfaces/car.interface";
import itemModel from "../models/item";

class ItemService {
  async create(item: ICar): Promise<ICar> {
    const newData = await itemModel.create(item);
    return newData;
  }
  async getAll(): Promise<ICar[]> {
    const items = await itemModel.find({});
    return items;
  }

  async getOne(id: string): Promise<ICar | null> {
    const item = await itemModel.findById(id);
    return item;
  }

  async update(id: string, body: ICar): Promise<ICar | null> {
    const item = await itemModel.findByIdAndUpdate(
      { _id: id },
      body,
      { new: true } // Return the updated document
    )
    return item;
  }

  async delete (id: string): Promise<ICar | null> {
    const item = await itemModel.findByIdAndDelete(id);
    return item;
  }
}

export default ItemService;
