import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import jwt, { JwtPayload } from 'jsonwebtoken';
import configaration from "../configaration";
import { User_Role } from "../modules/auth/auth.constant";
import AppError from "../errors/AppError";
import { authModel } from "../modules/auth/auth.model";

export const auth = (...requiredRules: (keyof typeof User_Role)[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {

        const token = req.headers.authorization?.split(' ')[1];

        const isVerified = jwt.verify(token as string, configaration.jwt_secret as string)
        const { email, role } = isVerified as JwtPayload;

        const user = await authModel.findOne({ email });

        if (user?.role !== role || !requiredRules.includes(role)) {
            throw new AppError(401, "You don't have permission to access this resource");

        }

        next();

    })
}