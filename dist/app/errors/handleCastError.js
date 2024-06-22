"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCastError = (err) => {
    const errorSourse = [{
            path: err.path,
            message: err.message,
        }];
    const statusCode = 400;
    return {
        statusCode,
        message: "Invalid Id",
        errorSourse,
    };
};
exports.default = handleCastError;
