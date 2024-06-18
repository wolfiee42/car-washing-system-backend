import { User_Role } from "./auth.constant";

export type TUser = {
    name: string;
    email: string;
    password: string;
    phone: string;
    role: keyof typeof User_Role;
    address: string;
}