"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const notFoundRoute = (req, res, next) => {
    return res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        statusCode: 404,
        "message": "Not Found",
    });
};
exports.default = notFoundRoute;