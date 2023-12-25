const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const { compareTime } = require('../utils/helpers/datetime-helpers')
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if(!req.body.flightNumber) {
        ErrorResponse.error = new AppError(['flightNumber not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.airplaneId) {
        ErrorResponse.error = new AppError(['airplaneId not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.departureAirportId) {
        ErrorResponse.error = new AppError(['departureAirportId not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.arrivalAirportId) {
        ErrorResponse.error = new AppError(['departureAirportId not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if(req.body.arrivalAirportId === req.body.departureAirportId) {
        ErrorResponse.error = new AppError(['departureAirportId and arrivalAirportId can not be same'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    
    if(!req.body.arrivalTime) {
        ErrorResponse.error = new AppError(['arrivalTime not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.departureTime) {
        ErrorResponse.error = new AppError(['departureTime not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.price || req.body.price <= 0) {
        ErrorResponse.error = new AppError(['price not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.totalSeats || req.body.totalSeats <= 0) {
        ErrorResponse.error = new AppError(['totalSeats not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if(!compareTime(req.body.arrivalTime, req.body.departureTime)){
        ErrorResponse.error = new AppError(['Arrival time must be greater than departure time'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}