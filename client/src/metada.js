const urlMetadata = require('url-metadata')

function BuscadorDePerros(){
  urlMetadata('https://dice-starter.vercel.app/').then(
  function (metadata) { // success handler
    console.log(metadata)
    return metadata
  },
  function (error) { // failure handler
    console.log(error)
  })
}


export const resDogs = BuscadorDePerros()