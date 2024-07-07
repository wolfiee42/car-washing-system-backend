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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const slot_model_1 = require("../slot/slot.model");
const service_model_1 = require("./service.model");
// service service
const createService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield service_model_1.serviceModel.findOne({ name: payload.name });
    if (isExist) {
        throw new Error("Service already exist");
    }
    const result = yield service_model_1.serviceModel.create(payload);
    const sanitizedUser = Object.assign({}, result);
    // delete sanitizedUser._doc.__v;
    return result;
});
const getAllService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.serviceModel.find({ isDeleted: false }, { __v: 0 });
    return result;
});
const singleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.serviceModel.findById(id);
    return result;
});
const updateService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isServiceExist = yield service_model_1.serviceModel.findOne({ _id: id, isDeleted: false });
    if (!isServiceExist) {
        throw new AppError_1.default(404, "Service not found");
    }
    const result = yield service_model_1.serviceModel.findByIdAndUpdate(id, payload, { new: true });
    const sanitizedPayload = Object.assign({}, result);
    // delete sanitizedPayload._doc.__v;
    return result;
});
const deleteService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isServiceExist = yield service_model_1.serviceModel.findOne({ _id: id, isDeleted: false });
    if (!isServiceExist) {
        throw new AppError_1.default(404, "Service not found");
    }
    const result = yield service_model_1.serviceModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    const sanitizedPayload = Object.assign({}, result);
    // delete sanitizedPayload._doc.__v;
    return result;
});
// slot service
const createSlot = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceId = payload.service;
    const service = yield service_model_1.serviceModel.findById(serviceId);
    const serviceDuration = service === null || service === void 0 ? void 0 : service.duration;
    // making starttime and endtime in integer from string.
    const startTime = parseInt(payload.startTime.split(':')[0]);
    const endTime = parseInt(payload.endTime.split(':')[0]);
    const startTimeToMinutes = startTime * 60;
    const endTimeToMinutes = endTime * 60;
    const totalDuration = endTimeToMinutes - startTimeToMinutes;
    const numberOfSlots = totalDuration / Number(serviceDuration);
    // conditions
    if (startTime > endTime) {
        throw new AppError_1.default(http_status_1.default.NOT_ACCEPTABLE, "Start time should be less than end time");
    }
    if (service === null || service === void 0 ? void 0 : service.isDeleted) {
        throw new AppError_1.default(http_status_1.default.NOT_ACCEPTABLE, "Service is deleted");
    }
    const slots = [];
    // a for loop so that, we can create multiple slots and store it in an array.
    for (let i = 0; i < numberOfSlots; i++) {
        const start = startTime + i;
        const end = start + 1;
        slots.push(Object.assign(Object.assign({}, payload), { startTime: `${start}:00`, endTime: `${end}:00` }));
    }
    const result = yield slot_model_1.slotModel.create(slots);
    // const sanitizedPayload = { ...result };
    // delete sanitizedPayload._doc.__v;
    return result;
});
exports.serviceService = {
    createService,
    singleService,
    getAllService,
    updateService,
    deleteService,
    createSlot
};
