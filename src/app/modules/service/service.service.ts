import AppError from "../../errors/AppError";
import { serviceModel } from "./service.model";
import { TService } from "./sevice.interface";

const createService = async (payload: TService) => {

    const isExist = await serviceModel.findOne({ name: payload.name });
    if (isExist) {
        throw new Error("Service already exist");
    }

    const result = await serviceModel.create(payload);
    return result;
}

const getAllService = async () => {

    const result = await serviceModel.find({ isDeleted: false });
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
    return result;

}

const deleteService = async (id: string) => {

    const isServiceExist = await serviceModel.findOne({ _id: id, isDeleted: false });
    if (!isServiceExist) {
        throw new AppError(404, "Service not found");
    }

    const result = await serviceModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
}


export const serviceService = {
    createService,
    singleService,
    getAllService,
    updateService,
    deleteService
}