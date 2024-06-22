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
exports.authModel = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const configaration_1 = __importDefault(require("../../configaration"));
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please provide an email"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        select: false,
    },
    phone: {
        type: String,
        required: [true, "Please provide a phone"]
    },
    address: {
        type: String,
        required: [true, "Please provide an address"]
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
        required: [true, "Please provide a role"]
    }
}, {
    timestamps: true,
    versionKey: false
});
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        user.password = yield bcryptjs_1.default.hash(user.password, Number(configaration_1.default.salt_round));
        next();
    });
});
exports.authModel = (0, mongoose_1.model)('Car User', userSchema);
