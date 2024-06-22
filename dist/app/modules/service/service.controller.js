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
exports.serviceController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const service_service_1 = require("./service.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
// service controller
const createService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceService.createService(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Service created successfully",
        data: result
    });
}));
const getAllService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceService.getAllService();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Service retrieved successfully",
        data: result
    });
}));
const singleService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield service_service_1.serviceService.singleService(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Service retrieved successfully",
        data: result
    });
}));
const updateService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const payload = req.body;
    const result = yield service_service_1.serviceService.updateService(id, payload);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Service updated successfully",
        data: result
    });
}));
const deleteService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield service_service_1.serviceService.deleteService(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Service deleted successfully",
        data: result
    });
}));
// slot controller
const createSlot = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceService.createSlot(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Slot created successfully",
        data: result
    });
}));
exports.serviceController = {
    createService,
    singleService,
    getAllService,
    updateService,
    deleteService,
    createSlot
};
