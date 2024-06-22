"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotRoute = void 0;
const express_1 = require("express");
const auth_1 = require("../../middlewares/auth");
const auth_constant_1 = require("../auth/auth.constant");
const slot_contoller_1 = require("./slot.contoller");
const route = (0, express_1.Router)();
route.get('/availability', (0, auth_1.auth)(auth_constant_1.User_Role.user), slot_contoller_1.slotController.getAvailableSlots);
exports.slotRoute = route;
