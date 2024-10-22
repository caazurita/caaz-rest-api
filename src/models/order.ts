import { Schema, model, Types, Model } from "mongoose";
import { IOrder } from "../interfaces/order.interface";

const orderSchema = new Schema<IOrder>(
  {
    id: { type: String },
    userId: { type: String },
    total: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const orderModel = model<IOrder>("orders", orderSchema);
export default orderModel;
