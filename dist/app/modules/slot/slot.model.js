"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotModel = void 0;
const mongoose_1 = require("mongoose");
const slotSchema = new mongoose_1.Schema({
    service: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "car service",
        required: [true, "Please provide a service"]
    },
    date: {
        type: String,
        required: [true, "Please provide a date"]
    },
    startTime: {
        type: String,
        required: [true, "Please provide a start time"]
    },
    endTime: {
        type: String,
        required: [true, "Please provide an end time"]
    },
    isBooked: {
        type: String,
        enum: ["available", "booked", "canceled"],
        default: "available"
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.slotModel = (0, mongoose_1.model)('car slot', slotSchema);
