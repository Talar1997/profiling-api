const getOne = require('./base/getOne')
const getAll = require('./base/getAll')
const createOne = require('./base/createOne')
const deleteOne = require('./base/deleteOne')
const updateOne = require('./base/updateOne')
const getMostRecent = require("./base/getMostRecent")

module.exports = {
    getOne,
    getAll,
    createOne,
    updateOne,
    deleteOne,
    getMostRecent
}