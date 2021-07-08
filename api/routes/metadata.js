var express = require('express');
var routerMetaData = express.Router();
const urlMetadata = require('url-metadata')

let urls = [
  'https://dice-starter.vercel.app/',
  'http://ec2-54-232-68-2.sa-east-1.compute.amazonaws.com:3000/',
  'https://weather-app-saymecoco.vercel.app/',
]
let metadataFinish =  []

/* GET users listing. */
routerMetaData.get('/', async function(req, res, next) {
  for (let index = 0; index < urls.length; index++) {
   await urlMetadata(urls[index]).then(
    function (metadata) { // success handler
      metadataFinish.push({
        url:urls[index],
        title:metadata['og:title'],
        description:metadata['og:description'],
        image:metadata['og:image'],
        author:metadata['author'],
      })
    },   
    function (error) { // failure handler
      console.log(error + 'Your backend its fuck')
    })
  }
  res.status(200).json(metadataFinish)
  metadataFinish = []
});

module.exports = routerMetaData;
