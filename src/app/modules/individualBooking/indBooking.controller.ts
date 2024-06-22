import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import jwt, { JwtPayload } from "jsonwebtoken";
import configaration from "../../configaration";
import { authModel } from "../auth/auth.model";
import { bookingModel } from "../bookings/booking.model";


const getIndividualBooking = catchAsync(async (req: Request, res: Response) => {

    const token = req.headers.authorization?.split(' ')[1];

    const isVerified = jwt.verify(token as string, configaration.jwt_secret as string)
    const { email } = isVerified as JwtPayload;

    const user = await authModel.findOne({ email }, { role: 0, createdAt: 0, updatedAt: 0, __v: 0 });
    console.log('user', user);

    const result = await bookingModel.find({ customer: user?._id }).populate("serviceId").populate("slotId");

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Individual booking retrieved successfully",
        data: result
    })

})

export const indBookingController = {
    getIndividualBooking
}