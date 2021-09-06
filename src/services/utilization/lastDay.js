const Utilization = require("../../models/utilization")

module.exports = () => async () => {
    // const query = {"createdAt": {$gt: new Date(Date.now() - 24 * 60 * 60 * 1000)}};
    return Utilization.find({})
}