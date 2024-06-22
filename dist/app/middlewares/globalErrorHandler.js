"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const configaration_1 = __importDefault(require("../configaration"));
const handleZodError_1 = __importDefault(require("../errors/handleZodError"));
const handleValidationError_1 = __importDefault(require("../errors/handleValidationError"));
const handleCastError_1 = __importDefault(require("../errors/handleCastError"));
const handleDuplicateError_1 = __importDefault(require("../errors/handleDuplicateError"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const globalErrorHandler = (err, req, res, next) => {
    // setting default value
    let statusCode = 500;
    let message = "Something went wrong";
    let errorSourse = [
        {
            path: "",
            message: ""
        }
    ];
    if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, handleZodError_1.default)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSourse = simplifiedError.errorSourse;
    }
    else if (err.name === "ValidationError") {
        const simplifiedError = (0, handleValidationError_1.default)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSourse = simplifiedError.errorSourse;
    }
    else if (err.name === 'CastError') {
        const simplifiedError = (0, handleCastError_1.default)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSourse = simplifiedError.errorSourse;
    }
    else if (err.code === 11000) {
        const simplifiedError = (0, handleDuplicateError_1.default)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSourse = simplifiedError.errorSourse;
    }
    else if (err instanceof AppError_1.default) {
        statusCode = err.statusCode;
        message = err.message;
        errorSourse = [
            {
                path: "",
                message: err.message
            }
        ];
    }
    else if (err instanceof Error) {
        message = err.message;
        errorSourse = [
            {
                path: "",
                message: err.message
            }
        ];
    }
    // ultimate error handler
    return res.status(statusCode).json({
        success: false,
        message,
        errorSourse,
        stack: configaration_1.default.environment === 'development' ? err.stack : null
    });
};
exports.default = globalErrorHandler;
