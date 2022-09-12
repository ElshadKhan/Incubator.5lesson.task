const http = require ('http')
const path = require('path');
const fs = require('fs');

let reqCount = 0

const faviconIco = path.join(__dirname, 'static', 'favicon.ico' + '.png')

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.setHeader('Content-Type', 'image/x-icon');
        fs.createReadStream(faviconIco).pipe(res);
      return
    }
    reqCount++
    switch (req.url) {
          case "/students":
              res.write('STUDENTS')
              break;
          case '/':
          case '/courses':
              res.write('Front + Back')
              break;
          default:
              res.write('404 not found')
  }
  res.write(' IT-KAMASUTRA: ' + reqCount)
  res.end()
})

server.listen(3003)