import { IAuth } from "./auth.interface";

export interface IUser extends IAuth {
    name: string
    description: string
    avatar: string
}