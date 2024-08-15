import { SUCCESSFUL_RESPONSE, ERROR_RESPONSE } from "./constants/commons";

/**
 * 
 * @param {*} res 
 * @param {*} folio 
 * @param {*} content 
 * @param {*} message 
 * @param {*} statusCode 
 * @returns 
 */
export const success = (res, folio, content, message, statusCode = 200) => {

    const response = {
        folio,
        content,
        message
    }

    console.log(`${SUCCESSFUL_RESPONSE} ${JSON.stringify(response)}`);
    return res.status(statusCode).send(response);
}

/**
 * 
 * @param {*} res 
 * @param {*} folio 
 * @param {*} content 
 * @param {*} message 
 * @param {*} statusCode 
 */
export const error = (res, folio, content, message, statusCode = 400) => {
    
    const response = {
        folio,
        content,
        message
    }

    console.error(`${ERROR_RESPONSE} ${JSON.stringify(response)}`);
    res.status(statusCode).send(response);
}