const APIFeatures = require('../../utils/apiFeatures')
const Log = require("../../models/log")

module.exports = async (query) => {
    const data = Log.count()

    const features = new APIFeatures(data, query)
        .sort()
        .paginate()

    return await features.query
}