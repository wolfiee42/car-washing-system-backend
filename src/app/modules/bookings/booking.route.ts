import { Router } from "express";
import { bookingController } from "./booking.controller";
import { auth } from "../../middlewares/auth";
import { User_Role } from "../auth/auth.constant";
import validateRequest from "../../middlewares/validateRequests";
import { bookingValidation } from "./booking.validation";

const route = Router();

route.post('/', validateRequest(bookingValidation.createBookingValidation), auth(User_Role.user), bookingController.createBooking);
route.get('/', auth(User_Role.admin), bookingController.getallBookings)

export const bookingRoute = route;