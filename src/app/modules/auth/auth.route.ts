import { Router } from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequests";
import { authValidation } from "./auth.validation";

const route = Router();

route.post('/sign-up', validateRequest(authValidation.createAdminUserValidation), authController.createAdminUser)


export const authRoutes = route;