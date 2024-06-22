"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingModel = void 0;
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    customer: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Car User',
    },
    serviceId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'car service',
    },
    slotId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
    versionKey: false
});
exports.bookingModel = (0, mongoose_1.model)('car booking', bookingSchema);
