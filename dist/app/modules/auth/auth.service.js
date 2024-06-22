"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const auth_model_1 = require("./auth.model");
const auth_utils_1 = require("./auth.utils");
const createAdminUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isEmailExist = yield auth_model_1.authModel.findOne({ email: payload.email });
    if (isEmailExist) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, "This email is already exist.");
    }
    const result = yield auth_model_1.authModel.create(payload);
    const sanitizedUser = Object.assign({}, result);
    // delete sanitizedUser._doc.password;
    // delete sanitizedUser._doc.__v;
    return result;
});
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // checking email
    const user = yield auth_model_1.authModel.findOne({ email: payload.email }).select("+password");
    if (!user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "This email is not exist.");
    }
    // checking password
    const checkPassword = yield (0, auth_utils_1.isPasswordCorrect)(payload.password, user.password);
    if (!checkPassword) {
        throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid password.");
    }
    const displayUser = Object.assign({}, user);
    // delete displayUser._doc.password;
    // delete displayUser._doc.__v;
    return user;
});
exports.authService = {
    createAdminUser,
    login
};
