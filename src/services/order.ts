import { IOrder } from "../interfaces/order.interface";
import itemModel from "../models/item";
import orderModel from "../models/order";

class OrderService {
  
  async getAll(): Promise<IOrder[]> {
    const items = await orderModel.find({});
    return items;
  }
}

export default OrderService;
