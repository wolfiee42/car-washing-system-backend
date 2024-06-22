"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoutes = void 0;
const express_1 = require("express");
const service_controller_1 = require("./service.controller");
const validateRequests_1 = __importDefault(require("../../middlewares/validateRequests"));
const service_validation_1 = require("./service.validation");
const auth_1 = require("../../middlewares/auth");
const auth_constant_1 = require("../auth/auth.constant");
const slot_validation_1 = require("../slot/slot.validation");
const route = (0, express_1.Router)();
// service route
route.post('/', (0, validateRequests_1.default)(service_validation_1.serviceValidation.createServiceValidation), (0, auth_1.auth)(auth_constant_1.User_Role.admin), service_controller_1.serviceController.createService);
route.get('/', service_controller_1.serviceController.getAllService);
route.get('/:id', service_controller_1.serviceController.singleService);
route.put('/:id', (0, validateRequests_1.default)(service_validation_1.serviceValidation.updateServiceValidation), (0, auth_1.auth)(auth_constant_1.User_Role.admin), service_controller_1.serviceController.updateService);
route.delete('/:id', (0, auth_1.auth)(auth_constant_1.User_Role.admin), service_controller_1.serviceController.deleteService);
// slot route
route.post('/slots', (0, validateRequests_1.default)(slot_validation_1.slotValidation.createSlotValidation), (0, auth_1.auth)(auth_constant_1.User_Role.admin), service_controller_1.serviceController.createSlot);
exports.serviceRoutes = route;
