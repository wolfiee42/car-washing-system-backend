import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TUser } from "./auth.interface";
import { authModel } from "./auth.model";

const createAdminUser = async (payload: TUser) => {

    const isEmailExist = await authModel.findOne({ email: payload.email });
    if (isEmailExist) {
        throw new AppError(httpStatus.CONFLICT, "This email is already exist.")
    }

    const result = await authModel.create(payload);
    return result;

}

export const authService = {
    createAdminUser
}