import { param } from 'express-validator';

// ID path param
const idPathParamSize = 36;
const INVALID_ID = `El id es invalido, intentelo de nuevo`;

export const idPathParam = [
    param('id').trim().isLength({min: idPathParam, max: idPathParam}).withMessage(INVALID_ID)
]