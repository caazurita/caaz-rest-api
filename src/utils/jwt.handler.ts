import { JwtPayload, sign, verify } from "jsonwebtoken";
const JWT_SECRET = <string>process.env.JWT_SECRET;

const generateJWT = async (id: string, expiresIn: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn,
  });
  return jwt;
};

const verifyJWT = async (jwt: string): Promise<JwtPayload | string> => {
  const decoded = verify(jwt, JWT_SECRET);
  return decoded;
};

export { generateJWT, verifyJWT };
