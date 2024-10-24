import { Request } from "express";
import { Strategy, ExtractJwt, StrategyOptionsWithSecret } from "passport-jwt";

const cookieExtractor = function (req: Request) {
  var token = null;
  if (req && req.cookies) {
    token = req.cookies["refreshToken"];
  }
  return token;
};
const opts: StrategyOptionsWithSecret = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || "",
};
const jwtStrategy = new Strategy(opts, (payload, done) => {
  return done(null, payload);
});

export default jwtStrategy;
