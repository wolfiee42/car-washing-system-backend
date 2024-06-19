import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TLogin, TUser } from "./auth.interface";
import { authModel } from "./auth.model";
import { isPasswordCorrect } from "./auth.utils";

const createAdminUser = async (payload: TUser) => {

    const isEmailExist = await authModel.findOne({ email: payload.email });
    if (isEmailExist) {
        throw new AppError(httpStatus.CONFLICT, "This email is already exist.")
    }

    const result = await authModel.create(payload);
    return result;

}

const login = async (payload: TLogin) => {

    // checking email
    const user = await authModel.findOne({ email: payload.email }).select("+password");
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, "This email is not exist.");
    }

    // checking password
    const checkPassword = await isPasswordCorrect(payload.password, user.password);
    if (!checkPassword) {
        throw new AppError(httpStatus.UNAUTHORIZED, "Invalid password.");
    }

    return user;
}

export const authService = {
    createAdminUser,
    login
}