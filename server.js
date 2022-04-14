var path = require('path');

var express = require('express');
var app = express();

var compression = require('compression');

app.use(compression()); // <--- must be first

// serve static asset
app.use(express.static(path.join(__dirname, 'dist')));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  // The following header prevents browsers from caching index.html and 404 statics asset:
  //
  // Reasons:
  // For each deployment, index.html will load new static resources.
  // If index.html is cached, index.html will load old static resources
  // that are no longer available. This leads to a blank page during deployment.
  //
  // During deployment, some statics resources are unavailable
  // temporarily. Later when these resources become available,
  // the browser will served the previous cached 404 content and
  // blank white screen result.
  //
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
  });
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.info('Production express server running at http://localhost:' + PORT);
});
