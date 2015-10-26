var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();
var mainWindow = null;

app.on('ready', function() {
  windowOptions = {
    width: 300,
    height: 400
  };
  mainWindow = new BrowserWindow(windowOptions);

  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // mainWindow.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

});
