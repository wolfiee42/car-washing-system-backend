import { serviceModel } from "./service.model";
import { TService } from "./sevice.interface";

const createService = async (payload: TService) => {
    const result = await serviceModel.create(payload);
    return result;
}

export const serviceService = {
    createService
}