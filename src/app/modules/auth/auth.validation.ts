import { z } from "zod";

const createAdminUserValidation = z.object({

    body: z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email").min(1, "Email is required"),
        password: z.string().min(1, "Password is required"),
        phone: z.string().min(1, "Phone number is required"),
        address: z.string().min(1, "Address is required"),
        role: z.enum(["admin", "user"], {
            errorMap: () => ({ message: "Invalid role" })
        })
    })

})

export const authValidation = {
    createAdminUserValidation
}