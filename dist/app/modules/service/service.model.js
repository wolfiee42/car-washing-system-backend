"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceModel = void 0;
const mongoose_1 = require("mongoose");
const serviceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Please provide a price"],
    },
    duration: {
        type: Number,
        required: [true, "Please provide a duration"],
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.serviceModel = (0, mongoose_1.model)("car service", serviceSchema);
