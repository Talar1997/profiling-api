const APIFeatures = require('../../utils/apiFeatures')
const Log = require("../../models/log")

module.exports = async (query) => {
    let newQuery = Object.assign({}, query)
    if (newQuery.limit) delete newQuery.limit
    if (newQuery.page) delete newQuery.page
    if (newQuery.sort) delete newQuery.sort

    const data = Log.countDocuments(newQuery)

    const features = new APIFeatures(data, query)
        .sort()
        .paginate()

    return await features.query
}