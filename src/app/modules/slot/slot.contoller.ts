import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { slotService } from "./slot.service";
import sendResponse from "../../utils/sendResponse";

const getAvailableSlots = catchAsync(async (req: Request, res: Response) => {

    const { serviceId, date } = req.query;
    const result = await slotService.getSlots(serviceId as string, date as string);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Available slots retrieved successfully",
        data: result
    })

})

export const slotController = {
    getAvailableSlots
}