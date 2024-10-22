import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { headers } = req;
    console.log(headers["user-agent"]);
    next();
}

export default logMiddleware