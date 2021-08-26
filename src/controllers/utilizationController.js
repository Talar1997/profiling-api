const {getAll, getOne} = require('./baseController')
const Utilization = require("../models/utilization")

// eslint-disable-next-line no-unused-vars
exports.getLast24hourData = getAll(Utilization)
exports.getAll = getAll(Utilization)
exports.getOne = getOne(Utilization)