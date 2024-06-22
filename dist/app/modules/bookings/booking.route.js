"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRoute = void 0;
const express_1 = require("express");
const booking_controller_1 = require("./booking.controller");
const auth_1 = require("../../middlewares/auth");
const auth_constant_1 = require("../auth/auth.constant");
const validateRequests_1 = __importDefault(require("../../middlewares/validateRequests"));
const booking_validation_1 = require("./booking.validation");
const route = (0, express_1.Router)();
route.post('/', (0, validateRequests_1.default)(booking_validation_1.bookingValidation.createBookingValidation), (0, auth_1.auth)(auth_constant_1.User_Role.user), booking_controller_1.bookingController.createBooking);
route.get('/', (0, auth_1.auth)(auth_constant_1.User_Role.admin), booking_controller_1.bookingController.getallBookings);
exports.bookingRoute = route;
