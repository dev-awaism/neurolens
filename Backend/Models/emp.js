const mongoose = require('mongoose')
const empSchema = new mongoose.Schema({
  empName: {
    type: String,
    required: true,
  },
  empPassword: {
    type: String,
    required: true
  },
  empPhone: {
    type: String,
    required: true
  },
  empFLname: {
    type: String,
    required: true
  }
  // empMobile: {
  //  type: String,
  //  required: true
  // },
})
module.exports = mongoose.model('Empl', empSchema)