import { Request, Response, Router } from "express";
import { passport } from "../utils/auth";
import AuthController from "../controllers/auth";
import checkSession from "../middleware/session";

const router = Router();
const controller = new AuthController();

router.post("/login", controller.login);

router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  controller.register
);

router.post(
  "/refresh-token",
  checkSession,
  // passport.authenticate("jwt", { session: false }),
  controller.refreshToken
);

export default router;
