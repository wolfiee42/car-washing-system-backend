"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceValidation = void 0;
const zod_1 = require("zod");
const createServiceValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required"),
        description: zod_1.z.string().min(1, "Description is required"),
        price: zod_1.z.number().min(1, "Price is required"),
        duration: zod_1.z.number().min(1, "Duration is required"),
        isDeleted: zod_1.z.boolean().default(false)
    })
});
const updateServiceValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required").optional(),
        description: zod_1.z.string().min(1, "Description is required").optional(),
        price: zod_1.z.number().min(1, "Price is required").optional(),
        duration: zod_1.z.number().min(1, "Duration is required").optional(),
        isDeleted: zod_1.z.boolean().default(false).optional()
    })
});
exports.serviceValidation = {
    createServiceValidation,
    updateServiceValidation
};
