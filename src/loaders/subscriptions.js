const onUpdate = require('./../subscribers/logger/onUpdate')
const onAppError = require('./../subscribers/logger/onAppError')
const onCreate = require('./../subscribers/logger/onCreate')
const onDelete = require('./../subscribers/logger/onDelete')
const logger = require('./logger')

module.exports = async () => {
    logger.info(`Searching for listeners...`)
    await onDelete()
    await onAppError()
    await onUpdate()
    await onCreate()
    logger.info(`Listeners has been set`)
}