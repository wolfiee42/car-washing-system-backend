import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { bookingService } from "./booking.service";
import sendResponse from "../../utils/sendResponse";
import jwt, { JwtPayload } from 'jsonwebtoken';
import configaration from "../../configaration";
import { authModel } from "../auth/auth.model";
import { TUser } from "../auth/auth.interface";
const createBooking = catchAsync(async (req: Request, res: Response) => {

    const token = req.headers.authorization?.split(' ')[1];

    const isVerified = jwt.verify(token as string, configaration.jwt_secret as string)
    const { email } = isVerified as JwtPayload;

    const user = await authModel.findOne({ email }, { role: 0, createdAt: 0, updatedAt: 0, __v: 0 });


    const result = await bookingService.createBooking(user as TUser, req.body);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Available slots retrieved successfully",
        data: result
    })

})

export const bookingController = {
    createBooking
}