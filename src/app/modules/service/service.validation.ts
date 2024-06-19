import { z } from "zod";

const createServiceValidation = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required"),
        description: z.string().min(1, "Description is required"),
        price: z.number().min(1, "Price is required"),
        duration: z.number().min(1, "Duration is required"),
        isDeleted: z.boolean().default(false)
    })
})

const updateServiceValidation = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required").optional(),
        description: z.string().min(1, "Description is required").optional(),
        price: z.number().min(1, "Price is required").optional(),
        duration: z.number().min(1, "Duration is required").optional(),
        isDeleted: z.boolean().default(false).optional()
    })
})

export const serviceValidation = {
    createServiceValidation,
    updateServiceValidation
}