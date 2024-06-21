import { z } from "zod";

const createBookingValidation = z.object({
    body: z.object({

        serviceId: z
            .string({
                required_error: "Service is required",
                invalid_type_error: "Service must be a string"
            })
            .min(1, "Service is required"),
        slotId: z
            .string({
                required_error: "Slot is required",
                invalid_type_error: "Slot must be a string"
            })
            .min(1, "Slot is required"),
        vehicleType: z
            .enum(['car', 'truck', 'SUV', 'van', 'motorcycle', 'bus', 'electricVehicle', 'hybridVehicle', 'bicycle', 'tractor']),
        vehicleBrand: z
            .string({
                required_error: "Brand is required",
                invalid_type_error: "Brand must be a string"
            })
            .min(1, "Vehicle Brand is required"),
        vehicleModel: z
            .string({
                required_error: "Model is required",
                invalid_type_error: "Model must be a string"
            })
            .min(1, "Vehicle Model is required"),
        manufacturingYear: z
            .number()
            .int()
            .min(1990, "Manufacturing year is required"),
        registrationPlate: z
            .string({
                required_error: "Registration plate is required",
                invalid_type_error: "Registration plate must be a string"
            })
            .min(1, "Registration plate is required")
    })
})

export const bookingValidation = {
    createBookingValidation
}