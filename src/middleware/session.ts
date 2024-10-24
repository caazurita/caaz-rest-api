import { NextFunction, Request, Response } from "express";
import { generateJWT, verifyJWT } from "../utils/jwt.handler";
import { JwtPayload } from "jsonwebtoken";
import { IRequest } from "../interfaces/request.interface";

const checkSession = async (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.headers["authorization"];
  const refreshToken = req.cookies["refreshToken"];

  if (!accessToken && !refreshToken) {
    res.status(401).send("NO_TOKEN_PROVIDED");
  } else {
    try {
      const jwt = accessToken ? accessToken.split(" ").pop() : "";
      const decoded = await verifyJWT(<string>jwt);
      req.user = decoded;
      next();
    } catch (error) {
      if (!refreshToken) {
        res.status(401).send("NO_REFRESH_TOKEN_PROVIDED");
      } else {
        try {
          const decode: any = verifyJWT(refreshToken);
          const accessToken = await generateJWT(decode, "1m");

          res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.ENVIRONMENT === "production",
            sameSite: "none",
          });
          res.json({ accessToken });
        } catch (error) {
          res.status(401);
          res.send("SESSION_NOT_VALID");
        }
      }
    }
  }
};

export default checkSession;
