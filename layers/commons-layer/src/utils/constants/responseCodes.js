
export const successCodes = {
    // 200 - OK. Standard response for successful HTTP requests.
    OK: 200,
    // 201 - Created. The request has been fulfilled, resulting in the creation of a new resource.
    CREATED: 201
}

export const clientErrorCodes = {
    // 400 - Bad Request. The request is not understood by the server due to an incorrect syntax. 
    BAD_REQUEST: 400,
    // 401 - Unauthorized. User authentication is required or that authorization has been refused.
    UNAUTHORIZED: 401,
    // 403 - Forbidden. Request without Authorization.
    FORBIDDEN: 403,
    // 404 - File Not Found.
    NOT_FOUND: 404,
}

export const serverErrorCodes = {
    // 500 - Internal Server Error. A generic error message, given when an unexpected condition was encountered.
    INTERNAL_SERVER_ERROR: 500
}