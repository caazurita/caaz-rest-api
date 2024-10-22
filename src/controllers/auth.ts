import { Request, Response } from "express";
import AuthService from "../services/auth";
import { handlerHttp } from "../utils/error.handler";

const service = new AuthService();
class AuthController {
    async login({ body }: Request, res: Response) {
        try {
            const { email, password } = body;
            const data = await service.login({ email, password });
            res.send(data);
        } catch (error: any) {
            handlerHttp(res, error.message);
        }
    }

    async register({ body }: Request, res: Response) {
        try {
            const data = await service.register(body);
            res.send(data);
        } catch (error) {
            console.log(error);
            handlerHttp(res, "ERROR_REGISTER_USER");
        }
    }
}

export default AuthController