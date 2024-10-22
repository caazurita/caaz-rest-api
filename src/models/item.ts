import { Schema, model, Types, Model } from "mongoose";
import { ICar } from "../interfaces/car.interface";

const itemSchema = new Schema<ICar>(
  {
    id: { type: String },
    model: { type: String },
    year: { type: Number },
    color: { type: String },
    status: { type: Boolean, default: true },
    type: {
      type: String,
      enum: ["hybrid", "motor", "electric"],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const itemModel = model<ICar>("items", itemSchema);
export default itemModel;
