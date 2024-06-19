import { Router } from "express";
import { serviceController } from "./service.controller";
import validateRequest from "../../middlewares/validateRequests";
import { serviceValidation } from "./service.validation";
import { auth } from "../../middlewares/auth";
import { User_Role } from "../auth/auth.constant";

const route = Router();



route.post('/', validateRequest(serviceValidation.createServiceValidation), auth(User_Role.admin), serviceController.createService);

route.get('/', serviceController.getAllService)

route.get('/:id', serviceController.singleService)

route.put('/:id', validateRequest(serviceValidation.updateServiceValidation), auth(User_Role.admin), serviceController.updateService)




export const serviceRoutes = route;