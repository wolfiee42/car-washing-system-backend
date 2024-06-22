"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// a global func for trycatch. using this func, i dont have to write tryCatch over and over again.
const catchAsync = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    };
};
exports.default = catchAsync;
