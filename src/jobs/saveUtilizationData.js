const logger = require("./../loaders/logger")
const osu = require('node-os-utils')
const UtilizationModel = require("./../models/utilization")


module.exports = async (job, done) => {
    const usage = await osu.cpu.usage()
    const memInfo = await osu.mem.info()
    const os = await osu.os

    //TODO: gather netstat data
    const utilizationData = {
        cpu: {
            cpus: osu.cpu.count(),
            usage: usage
        },
        memory: memInfo,
        os: {
            platform: os.platform(),
            uptimie: os.uptime(),
            ip: os.ip(),
        },
        isoDate: new Date(),
        timestamp: Date.now()
    }

    await UtilizationModel.create(utilizationData)

    logger.info('Saved utilization data...')

    done()
}