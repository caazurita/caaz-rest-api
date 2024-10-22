import { ICar } from "./car.interface";

export interface IOrder {
    id?: string;
    userId: string;
    total: number;
    items: ICar[];
}