"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotValidation = void 0;
const zod_1 = require("zod");
const createSlotValidation = zod_1.z.object({
    body: zod_1.z.object({
        service: zod_1.z
            .string({
            required_error: "Service is required",
            invalid_type_error: "Service must be a string"
        })
            .min(1, "Service is required"),
        date: zod_1.z
            .string({
            required_error: "Date is required",
            invalid_type_error: "Date must be a string"
        })
            .min(1, "Date is required"),
        startTime: zod_1.z
            .string({
            required_error: "Start time is required",
            invalid_type_error: "Start time must be a string"
        })
            .min(1, "Start time is required"),
        endTime: zod_1.z
            .string({
            required_error: "End time is required",
            invalid_type_error: "End time must be a string"
        })
            .min(1, "End time is required"),
        isBooked: zod_1.z
            .enum(["available", "booked", "canceled"])
            .default("available")
    })
});
exports.slotValidation = {
    createSlotValidation
};
