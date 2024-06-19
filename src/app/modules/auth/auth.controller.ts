import { Request, Response } from "express";
import { authService } from "./auth.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import jwt from 'jsonwebtoken';
import configaration from "../../configaration";

const createAdminUser = catchAsync(async (req: Request, res: Response) => {

    const result = await authService.createAdminUser(req.body);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "User registered successfully",
        data: result
    })
})

const login = catchAsync(async (req: Request, res: Response) => {

    const result = await authService.login(req.body);

    const jwtPayload = {
        email: result.email,
        role: result.role
    }
    const token = jwt.sign(jwtPayload, configaration.jwt_secret as string, { expiresIn: configaration.jwt_secret_expire });
    const refreshtoken = jwt.sign(jwtPayload, configaration.jwt_refresh_secret as string, { expiresIn: configaration.jwt_refresh_secret_expire });

    res.cookie('refreshToken', refreshtoken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    })

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "User logged in successfully",
        token: token,
        data: result
    })

})
export const authController = {
    createAdminUser,
    login
}