import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { User_Role } from "../auth/auth.constant";
import { slotController } from "./slot.contoller";

const route = Router();

route.get('/availability', auth(User_Role.user), slotController.getAvailableSlots)

export const slotRoute = route;