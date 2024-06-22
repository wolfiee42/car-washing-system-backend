"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidation = void 0;
const zod_1 = require("zod");
const createAdminUserValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required"),
        email: zod_1.z.string().email("Invalid email").min(1, "Email is required"),
        password: zod_1.z.string().min(1, "Password is required"),
        phone: zod_1.z.string().min(1, "Phone number is required"),
        address: zod_1.z.string().min(1, "Address is required"),
        role: zod_1.z.enum(["admin", "user"], {
            errorMap: () => ({ message: "Invalid role" })
        })
    })
});
const loginValidattion = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email("Invalid email").min(1, "Email is required"),
        password: zod_1.z.string().min(1, "Password is required")
    })
});
exports.authValidation = {
    createAdminUserValidation,
    loginValidattion
};
