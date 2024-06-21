import { Router } from "express";
import { indBookingController } from "./indBooking.controller";
import { auth } from "../../middlewares/auth";
import { User_Role } from "../auth/auth.constant";

const route = Router();

route.get('/', auth(User_Role.user), indBookingController.getIndividualBooking);

export const indBookingRoute = route;