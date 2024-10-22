import { Request, Response } from "express";
import { handlerHttp } from "../utils/error.handler";
import OrderService from "../services/order";

const service = new OrderService();
class OrderController {
  async getAll(req: Request, res: Response) {
    try {
      const data = await service.getAll();
      res.send(data);
    } catch (error) {
      handlerHttp(res, "ERROR_GET_ITEMS");
    }
  }
}

export default OrderController;
