var db = require('../db')
var Client = db.model('Client', {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  date:     { type: Date,   required: true, default: Date.now }
})

module.exports = Client
