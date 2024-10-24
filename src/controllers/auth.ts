import { Request, Response } from "express";
import AuthService from "../services/auth";
import { handlerHttp } from "../utils/error.handler";
import { IRequest } from "../interfaces/request.interface";
import { generateJWT } from "../utils/jwt.handler";

const service = new AuthService();
class AuthController {
  async login({ body }: Request, res: Response) {
    try {
      const { email, password } = body;
      const data = await service.login({ email, password });
      res
        .cookie("refreshToken", data.refreshToken, {
          httpOnly: true,
          secure: process.env.ENVIRONMENT === "production",
          sameSite: "none",
        })
        .json({
          accessToken: data.accessToken,
          user: data.user,
        });
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

  async refreshToken(req: IRequest, res: Response) {
    try {
      const { user } = req;
      try {
        console.log(user);
        res.json({});
        // const accessToken = await generateJWT(user, "1h");
        // res.json({ accessToken });
      } catch (error) {}
    } catch (error) {
      handlerHttp(res, "ERROR_REFRESH_TOKEN");
    }
  }
}

export default AuthController;
