import { Router } from "express";
import { serviceController } from "./service.controller";
import validateRequest from "../../middlewares/validateRequests";
import { serviceValidation } from "./service.validation";
import { auth } from "../../middlewares/auth";
import { User_Role } from "../auth/auth.constant";
import { slotValidation } from "../slot/slot.validation";

const route = Router();


// service route
route.post('/', validateRequest(serviceValidation.createServiceValidation), auth(User_Role.admin), serviceController.createService);

route.get('/', serviceController.getAllService)

route.get('/:id', serviceController.singleService)

route.put('/:id', validateRequest(serviceValidation.updateServiceValidation), auth(User_Role.admin), serviceController.updateService)

route.delete('/:id', auth(User_Role.admin), serviceController.deleteService)



// slot route
route.post('/slots', validateRequest(slotValidation.createSlotValidation), auth(User_Role.admin), serviceController.createSlot)


export const serviceRoutes = route;