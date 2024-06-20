import { Schema, model } from "mongoose";
import { TSlot } from "./slot.interface";

const slotSchema = new Schema<TSlot>(
    {
        service: {
            type: Schema.Types.ObjectId,
            ref: "car service",
            required: [true, "Please provide a service"]
        },
        date: {
            type: String,
            required: [true, "Please provide a date"]
        },
        startTime: {
            type: String,
            required: [true, "Please provide a start time"]
        },
        endTime: {
            type: String,
            required: [true, "Please provide an end time"]
        },
        isBooked: {
            type: String,
            enum: ["available", "booked", "canceled"],
            default: "available"
        }
    },
    {
        timestamps: true
    }
)

export const slotModel = model<TSlot>('car slot', slotSchema);