"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingValidation = void 0;
const zod_1 = require("zod");
const createBookingValidation = zod_1.z.object({
    body: zod_1.z.object({
        serviceId: zod_1.z
            .string({
            required_error: "Service is required",
            invalid_type_error: "Service must be a string"
        })
            .min(1, "Service is required"),
        slotId: zod_1.z
            .string({
            required_error: "Slot is required",
            invalid_type_error: "Slot must be a string"
        })
            .min(1, "Slot is required"),
        vehicleType: zod_1.z
            .enum(['car', 'truck', 'SUV', 'van', 'motorcycle', 'bus', 'electricVehicle', 'hybridVehicle', 'bicycle', 'tractor']),
        vehicleBrand: zod_1.z
            .string({
            required_error: "Brand is required",
            invalid_type_error: "Brand must be a string"
        })
            .min(1, "Vehicle Brand is required"),
        vehicleModel: zod_1.z
            .string({
            required_error: "Model is required",
            invalid_type_error: "Model must be a string"
        })
            .min(1, "Vehicle Model is required"),
        manufacturingYear: zod_1.z
            .number()
            .int()
            .min(1990, "Manufacturing year is required"),
        registrationPlate: zod_1.z
            .string({
            required_error: "Registration plate is required",
            invalid_type_error: "Registration plate must be a string"
        })
            .min(1, "Registration plate is required")
    })
});
exports.bookingValidation = {
    createBookingValidation
};
