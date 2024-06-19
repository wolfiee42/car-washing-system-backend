import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { serviceService } from "./service.service";
import sendResponse from "../../utils/sendResponse";

const createService = catchAsync(async (req: Request, res: Response) => {

    const result = await serviceService.createService(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Service created successfully",
        data: result
    })

})

export const serviceController = {
    createService
}