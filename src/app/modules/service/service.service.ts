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


const singleService = async (id: string) => {

    const result = await serviceModel.findById(id);
    console.log(result);
    return result;

}
export const serviceService = {
    createService,
    singleService
}