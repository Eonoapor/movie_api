const url = require('url'); //mporting url module

const http = require('http'); //mporting http module
http.createServer((request, response) => {
  var addr = request.url;
  var q = url.parse(addr, true);

//Parse request.url for determining if URL contains the word “documentation”.
//If not, return the “documentation.html” file to the user,
//otherwise return the “index.html” file.

  f (q.pathname.includes('documentation')) {
      filePath = (__dirname + '/documentation.html');
    } else {
      filePath = 'index.html';
    }

const fs = require('fs'); //mporting fs module to both the request URL,
                         //and a timestamp to the “log.txt” file.
    fs.appendFile('log.txt', 'URL: ' + addr + '\nTimestamp: ' + new Date()
    + '\n\n', function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('Added to log.');
        }
      })
}).listen(8080); //listening for requests on port
