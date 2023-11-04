const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function noIdInRequestPayload(req, res, next) {
    if(req.body.id) {
        ErrorResponse.error = new AppError(['You Can not update id of any resource'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports = {
  noIdInRequestPayload
}