import { Request, Response } from "express";
import { authService } from "./auth.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

const createAdminUser = catchAsync(async (req: Request, res: Response) => {

    const result = await authService.createAdminUser(req.body);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "User registered successfully",
        data: result
    })
})

export const authController = {
    createAdminUser
}