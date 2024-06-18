import { Schema, model } from "mongoose";
import { TUser } from "./auth.interface";
import bcrypt from 'bcrypt'
import configaration from "../../configaration";
const userSchema = new Schema(
    {
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
    }
    ,
    {
        timestamps: true
    }
);

userSchema.pre("save", async function (next) {

    const user = this;
    user.password = await bcrypt.hash(user.password, 10); // have to change this
    next();

});

export const authModel = model<TUser>('Car User', userSchema);