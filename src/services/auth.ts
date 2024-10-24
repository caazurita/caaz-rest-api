import { IAuth } from "../interfaces/auth.interface";
import { IUser } from "../interfaces/user.interface";
import userModel from "../models/user";
import { encrypt, verify } from "../utils/bycript.handler";
import { generateJWT } from "../utils/jwt.handler";

class AuthService {
  async register({ name, email, password }: IUser) {
    const checkIs = await userModel.findOne({ email });
    if (checkIs) {
      throw new Error("USER_ALREADY_EXISTS");
    }
    const hashPassword = await encrypt(password);
    const data = await userModel.create({
      name,
      email,
      password: hashPassword,
    });
    return data;
  }
  async login({ email, password }: IAuth) {
    const checkIs = await userModel.findOne({ email });
    if (!checkIs) {
      throw new Error("USER_NOT_EXISTS");
    }
    const passwordHash = checkIs.password;
    const isValid = await verify(password, passwordHash);
    if (!isValid) throw new Error("PASSWORD_INVALID");
    const accessToken = await generateJWT(checkIs.email, "1m");
    const refreshToken = await generateJWT(checkIs.email, "1d");

    return {
      accessToken,
      refreshToken,
      user: checkIs,
    };
  }
}

export default AuthService;
