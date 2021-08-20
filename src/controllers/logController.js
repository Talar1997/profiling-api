const {getOne} = require('./baseController')
const Log = require('../models/log')
const findAllLogs = require('./log/findAllLogs')
const getNumberOfLogs = require('./log/getNumberOfLogs')

exports.getOneLog = getOne(Log)
exports.getAllLogs = findAllLogs()
exports.getNumberOfLogs = getNumberOfLogs()
