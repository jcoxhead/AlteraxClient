var router = require('express').Router()
var Client = require('../../models/client')

router.get('/clients', function (req, res, next) {
  Client.find()
  .sort('-date')
  .exec(function (err, posts) {
    if (err) { return next(err) }
    res.json(posts)
  })
})

router.post('/clients', function (req, res, next) {
  var client = new Client({})
  client.firstName = req.body.firstName
  client.lastName = req.body.lastName
  client.save(function (err, client) {
  if (err) { return next(err) }
     res.status(201).json(client)
    })
})

module.exports = router
