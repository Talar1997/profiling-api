const successResponse = require('./../response/successResponse')
const {status} = require('../../config/constants/statusCodes')
const handleError = require("../../api/middleware/errorHandler")
const AppError = require("../../utils/appError")
const BaseService = require("../../services/baseService")
const Utilization = require("../../models/utilization")

//FIXME: why UtilizationService doesn't work properly? Make investigation
module.exports = () => async (req, res, next) => {
    try {
        const documents = await BaseService.getAll(Utilization, {"timestamp": {$gt: new Date(Date.now() - 24 * 60 * 60 * 1000)}})
        if (!documents) {
            return handleError(new AppError(status.NOT_FOUND, 'fail', 'No documents found'), req, res, next)
        }

        successResponse(res, status.OK, documents, true)
    } catch (error) {
        return handleError(error, req, res, next)
    }
}