import { Router } from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequests";
import { authValidation } from "./auth.validation";

const route = Router();

route.post('/signup', validateRequest(authValidation.createAdminUserValidation), authController.createAdminUser)
route.post('/login', validateRequest(authValidation.loginValidattion), authController.login)

export const authRoutes = route;