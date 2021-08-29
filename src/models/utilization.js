const mongoose = require('mongoose')
const utilizationSchema = new mongoose.Schema({
    cpu: {
        cpus: {
            type: Number,
        },
        usage:{
            type: Number
        }
    },
    memory: {
        totalMemMb: {
            type: Number,
        },
        usedMemMb: {
            type: Number,
        },
        freeMemMb: {
            type: Number,
        },
        usedMemPercentage: {
            type: Number,
        },
        freeMemPercentage: {
            type: Number,
        },
    },
    os: {
        platform: {
            type: String,
        },
        uptime: {
            type: Number
        },
        ip: {
            type: String
        }
    },
    isoDate: {
        type: Date,
        required: true,
    },
    timestamp: {
        type: Number,
        required: true,
    },
})

const Utilization = mongoose.model('Utilization', utilizationSchema)
module.exports = Utilization