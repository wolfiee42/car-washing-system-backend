import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const authenticationError = (req: Request, res: Response, next: NextFunction) => {

    return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        statusCode: httpStatus.UNAUTHORIZED,
        "message": "You have no access to this route",
    })
}

export default authenticationError;