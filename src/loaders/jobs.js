const logger = require("./logger")
const createMongoBackup = require('./../jobs/createMongoBackup')
const removeOldLogs = require('./../jobs/removeOldLogs')
const config = require('./../config/index')
const saveUtilizationData = require('./../jobs/saveUtilizationData')

module.exports = async (agenda) => {
    logger.info(`Creating scheduled jobs for agenda...`)

    agenda.define('createMongoBackup', createMongoBackup)
    agenda.every(config.database.backupCronExpression, 'createMongoBackup')

    // One time in 3 months
    agenda.define('removeOldLogs', removeOldLogs)
    agenda.every('30 05 01 */3 *', 'removeOldLogs')

    // Every 2 minutes
    agenda.define('saveUtilizationData', saveUtilizationData)
    agenda.every('*/5 * * * *', 'saveUtilizationData')

    agenda.start()
    logger.info(`Jobs has been defined and started`)
}