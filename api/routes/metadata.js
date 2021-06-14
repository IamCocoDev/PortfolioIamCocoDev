var express = require('express');
var routerMetaData = express.Router();
const urlMetadata = require('url-metadata')


/* GET users listing. */
routerMetaData.get('/', function(req, res, next) {
  urlMetadata('https://dice-starter.vercel.app/').then(
  function (metadata) { // success handler
    console.log(metadata)
    return metadata
  },
<<<<<<< HEAD
  function (e) { // failure handler
    console.log(e)
=======
  function (error) { // failure handler
    console.log(error + 'Your backend its fuck')
>>>>>>> e617ee596cef00122f72553351b79aa69854f11d
  })
});

module.exports = routerMetaData;
