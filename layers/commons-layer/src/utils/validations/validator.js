import { clientErrorCodes } from '../constants/responseCodes.js';
import { ERROR } from '../constants/commons.js';
import { error} from '../response.js'
import { validationResult } from 'express-validator';

export const validator = (req, res, next) => {

    const result = validationResult(req);

    if(!result.isEmpty()) {
        const errors = { errors:  result.array() };
        return error(res, req.awsRequestId, errors, ERROR, clientErrorCodes.BAD_REQUEST);
    }

   return next();
}