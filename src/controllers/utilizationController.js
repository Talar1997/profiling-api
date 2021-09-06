const {getAll, getOne, getMostRecent} = require('./baseController')
const lastDay = require("./utilization/lastDay")
const Utilization = require("../models/utilization")

exports.getLast24hourData = lastDay()
exports.getCurrentData = getMostRecent(Utilization)
exports.getAll = getAll(Utilization)
exports.getOne = getOne(Utilization)