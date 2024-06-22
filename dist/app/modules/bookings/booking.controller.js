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
exports.bookingController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const booking_service_1 = require("./booking.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configaration_1 = __importDefault(require("../../configaration"));
const auth_model_1 = require("../auth/auth.model");
const createBooking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    const isVerified = jsonwebtoken_1.default.verify(token, configaration_1.default.jwt_secret);
    const { email } = isVerified;
    const user = yield auth_model_1.authModel.findOne({ email }, { role: 0, createdAt: 0, updatedAt: 0, __v: 0 });
    const result = yield booking_service_1.bookingService.createBooking(user, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Available slots retrieved successfully",
        data: result
    });
}));
const getallBookings = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_service_1.bookingService.getallBookings();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "All bookings retrieved successfully",
        data: result
    });
}));
exports.bookingController = {
    createBooking,
    getallBookings
};
