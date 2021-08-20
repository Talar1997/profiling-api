const createErrorLog = require('./log/createErrorLog')
const createInfoLog = require('./log/createInfoLog')
const createLog = require('./log/createLog')
const findAllLogs = require('./log/findAllLogs')
const removeOldLogs = require('./log/removeOldLogs')
const countLogs = require('./log/countLogs')

module.exports = {
    createInfoLog,
    createErrorLog,
    createLog,
    findAllLogs,
    removeOldLogs,
    countLogs,
}