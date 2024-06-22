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
exports.indBookingController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configaration_1 = __importDefault(require("../../configaration"));
const auth_model_1 = require("../auth/auth.model");
const booking_model_1 = require("../bookings/booking.model");
const getIndividualBooking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    const isVerified = jsonwebtoken_1.default.verify(token, configaration_1.default.jwt_secret);
    const { email } = isVerified;
    const user = yield auth_model_1.authModel.findOne({ email }, { role: 0, createdAt: 0, updatedAt: 0, __v: 0 });
    console.log('user', user);
    const result = yield booking_model_1.bookingModel.find({ customer: user === null || user === void 0 ? void 0 : user._id }).populate("serviceId").populate("slotId");
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Individual booking retrieved successfully",
        data: result
    });
}));
exports.indBookingController = {
    getIndividualBooking
};
