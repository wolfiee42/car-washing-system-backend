import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { serviceService } from "./service.service";
import sendResponse from "../../utils/sendResponse";


// service controller
const createService = catchAsync(async (req: Request, res: Response) => {

    const result = await serviceService.createService(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Service created successfully",
        data: result
    })

})

const getAllService = catchAsync(async (req: Request, res: Response) => {

    const result = await serviceService.getAllService();

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Service retrieved successfully",
        data: result
    })
})

const singleService = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params;
    const result = await serviceService.singleService(id);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Service retrieved successfully",
        data: result
    })

})

const updateService = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params;
    const payload = req.body;

    const result = await serviceService.updateService(id, payload);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Service updated successfully",
        data: result
    })

})

const deleteService = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params;
    const result = await serviceService.deleteService(id);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Service deleted successfully",
        data: result
    })

})


// slot controller
const createSlot = catchAsync(async (req: Request, res: Response) => {

    const result = await serviceService.createSlot(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Slot created successfully",
        data: result
    })
})


export const serviceController = {
    createService,
    singleService,
    getAllService,
    updateService,
    deleteService,
    createSlot
}