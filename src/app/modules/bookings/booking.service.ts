import { TUser } from "../auth/auth.interface";
import { TBooking } from "./booking.interface";
import { bookingModel } from "./booking.model";

const createBooking = async (user: TUser, payload: TBooking) => {

    const service = payload.serviceId;
    const slot = payload.slotId;
    const newPayload = { ...payload, service: service, slot: slot, customer: user };

    const result = (await (await (await bookingModel.create(newPayload)).populate("serviceId")).populate("slotId")).populate("customer");
    return result;

};

const getallBookings = async () => {
    const result = await bookingModel.find().populate("serviceId").populate("slotId").populate("customer");
    return result;
}

export const bookingService = {
    createBooking,
    getallBookings
}