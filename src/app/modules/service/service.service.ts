import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TSlot } from "../slot/slot.interface";
import { slotModel } from "../slot/slot.model";
import { serviceModel } from "./service.model";
import { TService } from "./sevice.interface";



// service service
const createService = async (payload: TService) => {

    const isExist = await serviceModel.findOne({ name: payload.name });
    if (isExist) {
        throw new Error("Service already exist");
    }

    const result = await serviceModel.create(payload);

    const sanitizedUser = { ...result };
    // delete sanitizedUser._doc.__v;

    return result;
}

const getAllService = async () => {

    const result = await serviceModel.find({ isDeleted: false }, { __v: 0 });
    return result;

}

const singleService = async (id: string) => {

    const result = await serviceModel.findById(id);
    return result;

}

const updateService = async (id: string, payload: Partial<TService>) => {

    const isServiceExist = await serviceModel.findOne({ _id: id, isDeleted: false });
    if (!isServiceExist) {
        throw new AppError(404, "Service not found");
    }

    const result = await serviceModel.findByIdAndUpdate(id, payload, { new: true });

    const sanitizedPayload = { ...result };
    // delete sanitizedPayload._doc.__v;


    return result;

}

const deleteService = async (id: string) => {

    const isServiceExist = await serviceModel.findOne({ _id: id, isDeleted: false });
    if (!isServiceExist) {
        throw new AppError(404, "Service not found");
    }

    const result = await serviceModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });

    const sanitizedPayload = { ...result };
    // delete sanitizedPayload._doc.__v;

    return result;
}

// slot service
const createSlot = async (payload: TSlot) => {


    const serviceId = payload.service;
    const service = await serviceModel.findById(serviceId);
    const serviceDuration = service?.duration;

    // making starttime and endtime in integer from string.
    const startTime = parseInt(payload.startTime.split(':')[0]);
    const endTime = parseInt(payload.endTime.split(':')[0]);

    const startTimeToMinutes = startTime * 60;
    const endTimeToMinutes = endTime * 60;


    const totalDuration = endTimeToMinutes - startTimeToMinutes;

    const numberOfSlots = totalDuration / Number(serviceDuration);




    // conditions
    if (startTime > endTime) {
        throw new AppError(httpStatus.NOT_ACCEPTABLE, "Start time should be less than end time");
    }

    if (service?.isDeleted) {
        throw new AppError(httpStatus.NOT_ACCEPTABLE, "Service is deleted");
    }

    let slots = []

    // a for loop so that, we can create multiple slots and store it in an array.
    for (let i = 0; i < numberOfSlots; i++) {
        const start = startTime + i;
        const end = start + 1
        slots.push({ ...payload, startTime: `${start}:00`, endTime: `${end}:00` })
    }

    const result = await slotModel.create(slots);

    // const sanitizedPayload = { ...result };

    // delete sanitizedPayload._doc.__v;


    return result;

}


export const serviceService = {
    createService,
    singleService,
    getAllService,
    updateService,
    deleteService,
    createSlot
}