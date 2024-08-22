import { body } from 'express-validator';
import { validator } from './validator.js';

const INVALID_USERNAME = 'El username es invalido, intenta con otro';
const INVALID_PASSWORD = 'La contrasena es invalida, intenta con otra';

export const createUserCommons = [
    body('username').isString().notEmpty().withMessage(INVALID_USERNAME),
    body('password').isString().notEmpty().withMessage(INVALID_PASSWORD),
    validator
]

export const updateUserCommons = [
    body('username').isString().notEmpty().withMessage(INVALID_USERNAME),
    validator
]