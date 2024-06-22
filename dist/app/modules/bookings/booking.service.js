"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingService = void 0;
const booking_model_1 = require("./booking.model");
const createBooking = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const service = payload.serviceId;
    const slot = payload.slotId;
    const newPayload = Object.assign(Object.assign({}, payload), { service: service, slot: slot, customer: user });
    const result = (yield (yield (yield booking_model_1.bookingModel.create(newPayload)).populate("serviceId")).populate("slotId")).populate("customer");
    return result;
});
const getallBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.bookingModel.find().populate("serviceId").populate("slotId").populate("customer");
    return result;
});
exports.bookingService = {
    createBooking,
    getallBookings
};
