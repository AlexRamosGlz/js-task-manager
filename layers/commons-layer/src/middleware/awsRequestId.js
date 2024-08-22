import { ERROR } from "../utils/constants/commons.js";

export const awsRequestId = (req, res, next) => {

    try {
        req.awsRequestId = req.apiGateway.context.awsRequestId;

        next();
    }catch(error) {
        console.error(`${ERROR} ${error}`);
    }
}