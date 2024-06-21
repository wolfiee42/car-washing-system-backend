import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
    {
        customer: {
            type: Schema.Types.ObjectId,
            ref: 'Car User',
        },
        serviceId: {
            type: Schema.Types.ObjectId,
            ref: 'car service',
        },
        slotId: {
            type: Schema.Types.ObjectId,
            ref: 'car slot',
        },
        vehicleType: {
            type: String,
            enum: ['car', 'truck', 'SUV', 'van', 'motorcycle', 'bus', 'electricVehicle', 'hybridVehicle', 'bicycle', 'tractor'],
            required: [true, "Please provide a type vehicle."]
        },
        vehicleBrand: {
            type: String,
            required: [true, "Please provide a brand of the vehicle."]
        },
        vehicleModel: {
            type: String,
            required: [true, "Please provide a model of the vehicle."]
        },
        manufacturingYear: {
            type: Number,
            required: [true, "Please provide a manufacturing year."]
        },
        registrationPlate: {
            type: String,
            required: [true, "Please provide a registration plate."]
        },
    },
    {
        timestamps: true
    }
);

export const bookingModel = model('car booking', bookingSchema);