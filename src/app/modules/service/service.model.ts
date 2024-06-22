import { Schema, model } from "mongoose";
import { TService } from "./sevice.interface";

const serviceSchema = new Schema<TService>(
    {
        name: {
            type: String,
            required: [true, "Please provide a name"],
            trim: true
        },
        description: {
            type: String,
            required: [true, "Please provide a description"],
            trim: true
        },
        price: {
            type: Number,
            required: [true, "Please provide a price"],
        },
        duration: {
            type: Number,
            required: [true, "Please provide a duration"],
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export const serviceModel = model<TService>("car service", serviceSchema)