import { NextFunction, Request, Response } from "express";
import { verifyJWT } from "../utils/jwt.handler";
import { JwtPayload } from "jsonwebtoken";

interface IRequest extends Request {
  user?: string | JwtPayload;
}

const checkSession = (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const jwtHeader = req.headers.authorization || "";
    const jwt = jwtHeader.split(" ").pop();
    const isUser = verifyJWT(`${jwt}`);
    if (!isUser) {
      res.status(401);
      res.send("SESSION_NOT_VALID");
    } else {
      req.user = isUser;
      next();
    }
    
  } catch (error) {
    res.status(401);
    res.send("SESSION_NOT_VALID");
  }
};

export default checkSession;
