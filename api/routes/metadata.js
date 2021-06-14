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
  function (e) { // failure handler
    console.log(e)
  })
});

module.exports = routerMetaData;
