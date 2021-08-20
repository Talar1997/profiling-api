// const base = require('./baseController')
// const Utilization = require('./../models/utilization')
const successResponse = require('./../controllers/response/successResponse')
const {status} = require('../config/constants/statusCodes')
const osu = require('node-os-utils')

//TODO: get data from database
// eslint-disable-next-line no-unused-vars
exports.getLast24hourData = async (req, res, next) => {
    const usage = await osu.cpu.usage()
    const memInfo = await osu.mem.info()
    const os = await osu.os

    const data = {
        cpu: {
            cpus: osu.cpu.count(),
            usage: usage
        },
        memory: memInfo,
        os: {
            platform: os.platform(),
            uptimie: os.uptime(),
            ip: os.ip(),
        }
    }
    successResponse(res, status.OK, data, true)

}