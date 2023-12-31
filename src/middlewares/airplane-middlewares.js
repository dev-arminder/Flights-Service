const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if(!req.body.modelNumber) {
        ErrorResponse.error = new AppError(['Model Number not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

function validateUpdateRequest(req, res, next) {
    if(req.body.modelNumber) {
        ErrorResponse.error = new AppError(['You can not update Airplane modelNumber'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    } 
    
    if(!req.body.capacity) {
        ErrorResponse.error = new AppError(['You can only update capacity of Airplane'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    } 
    next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateRequest
}