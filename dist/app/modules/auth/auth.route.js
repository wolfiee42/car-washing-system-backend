"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const validateRequests_1 = __importDefault(require("../../middlewares/validateRequests"));
const auth_validation_1 = require("./auth.validation");
const route = (0, express_1.Router)();
route.post('/sign-up', (0, validateRequests_1.default)(auth_validation_1.authValidation.createAdminUserValidation), auth_controller_1.authController.createAdminUser);
route.post('/login', (0, validateRequests_1.default)(auth_validation_1.authValidation.loginValidattion), auth_controller_1.authController.login);
exports.authRoutes = route;
