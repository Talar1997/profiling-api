const AppError = require("../../utils/appError")
const handleError = require("../../api/middleware/errorHandler")
const successResponse = require('../response/successResponse')
const BaseService = require("../../services/baseService")
const {status} = require('../../config/constants/statusCodes')

module.exports = Model => async (req, res, next) => {
    try {
        const document = await BaseService.getMostRecent(Model)
        if (!document) {
            return handleError(new AppError(status.NOT_FOUND, 'fail', 'No document found'), req, res, next)
        }

        successResponse(res, status.OK, document[0])
    } catch (error) {
        return handleError(error, req, res, next)
    }
}