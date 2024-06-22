"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleDuplicateError = (err) => {
    const regex = /"([^"]*)"/;
    const match = err.message.match(regex);
    const extractedMessage = match && match[1];
    const errorSourse = [
        {
            path: '',
            message: `${extractedMessage} is already exist.`
        }
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: "Duplicate Error",
        errorSourse,
    };
};
exports.default = handleDuplicateError;
