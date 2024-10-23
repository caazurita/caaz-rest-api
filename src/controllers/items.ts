import { Request, Response } from "express";
import { handlerHttp } from "../utils/error.handler";
import ItemService from "../services/item";

const service = new ItemService();
class ItemsController {
  async getAll(req: Request, res: Response) {
    try {
      const data = await service.getAll();
      res.send(data);
    } catch (error) {
      handlerHttp(res, "ERROR_GET_ITEMS");
    }
  }

  async getOne(req: Request, res: Response) {
    try {
    } catch (error) {
      handlerHttp(res, "ERROR_GET_ITEM");
    }
  }

  async create({ body }: Request, res: Response): Promise<void> {
    try {
      const data = await service.create(body);
      res.send(data);
    } catch (error) {
      console.log(error);
      handlerHttp(res, "ERROR_CREATE_ITEM");
    }
  }

  async update({ params, body }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await service.update(id, body);
      res.send(data);
    } catch (error) {
      handlerHttp(res, "ERROR_UPDATE_ITEM");
    }
  }

  async delete({ params }: Request, res: Response) {
    try {
      const data = await service.delete(params.id);
      res.send(data);
    } catch (error) {
      handlerHttp(res, "ERROR_DELETE_ITEM");
    }
  }
}

export default ItemsController;
