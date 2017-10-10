var https = require('https');  

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTMLChunks () { 


https.get(requestOptions, function(response) {

  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (chunk) {
    console.log('Chunk Received. Length:' + chunk.length);
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
  console.log('Response stream complete.');
  });

}); 

};

getAndPrintHTMLChunks(requestOptions);
