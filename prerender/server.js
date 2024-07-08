const prerender = require('prerender');

var server = prerender({
  chromeFlags: [ '--headless', '--remote-debugging-port=9222',  /* not needed? --> */ '--disable-gpu', '--disable-software-rasterizer', '--disable-dev-shm-usage','--hide-scrollbars' ],
  logRequests: true,
  pageLoadTimeout: 60 * 1000, // 7: 150000 unindexed; 15: 20000 pages less
  //captureConsoleLog: false
});

server.start();
