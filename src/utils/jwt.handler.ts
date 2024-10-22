import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = <string>process.env.JWT_SECRET;

const generateJWT = async (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "24h",
  });
  return jwt;
};

const verifyJWT = async (jwt: string) => {
  const decoded = verify(jwt, JWT_SECRET);
  return decoded;
};

export { generateJWT, verifyJWT };
