
const {populateTable} = require('../../config/constants/dataToPopulate')

module.exports = async (Model) => {
    return Model.find()
        .sort({ _id: -1 })
        .limit(1)
        .populate(populateTable)
}