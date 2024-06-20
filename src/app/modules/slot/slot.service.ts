import AppError from "../../errors/AppError";
import { slotModel } from "./slot.model"

const getSlots = async (serviceId: string, date: string) => {

    const result = await slotModel
        .find({
            service: serviceId,
            date: date,
            $or: [
                { isBooked: "available" },
                { isBooked: "canceled" }
            ],
        },
            { __v: 0 })
        .populate("service");

    if (result.length < 1) {
        throw new AppError(400, "No slots available")
    }

    return result;

}

export const slotService = {
    getSlots,
}