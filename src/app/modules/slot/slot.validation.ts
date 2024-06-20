import { z } from "zod";

const createSlotValidation = z.object({

    body: z.object({
        service: z
            .string({
                required_error: "Service is required",
                invalid_type_error: "Service must be a string"
            })
            .min(1, "Service is required"),
        date: z
            .string({
                required_error: "Date is required",
                invalid_type_error: "Date must be a string"
            })
            .min(1, "Date is required"),
        startTime: z
            .string({
                required_error: "Start time is required",
                invalid_type_error: "Start time must be a string"
            })
            .min(1, "Start time is required"),
        endTime: z
            .string({
                required_error: "End time is required",
                invalid_type_error: "End time must be a string"
            })
            .min(1, "End time is required"),
        isBooked: z
            .enum(["available", "booked", "canceled"])
            .default("available")
    })
})

export const slotValidation = {
    createSlotValidation
}