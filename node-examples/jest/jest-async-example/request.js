// request.js
const http = require('http')

export default (url) => new Promise(resolve => {
    http.get({path: url}, response => {
      let data = ''
      response.on('data', _data => (data += _data))
      response.on('end', () => resolve(data))
    })
  })
