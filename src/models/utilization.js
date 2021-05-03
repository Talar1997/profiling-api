const mongoose = require('mongoose')
const utilizationSchema = new mongoose.Schema({
  test: "Number"
})

const Utilization = mongoose.model('Utilization', utilizationSchema)
module.exports = Utilization