var electron, path, json;

path = require('path');
json = require('../../package.json');

electron = require('electron');

electron.app.on('ready', function() {
  var window;

  window = new electron.BrowserWindow({
    title: json.name,
    width: json.settings.width,
    height: json.settings.height,
    alwaysOnTop: json.settings.alwaysontop,
    resizable: json.settings.resizable,
    fullscreen: json.settings.fullscreen,
    kiosk: json.settings.kiosk
  });

  // Open Dev Tools
  window.webContents.openDevTools();

  window.loadURL('file://' + path.join(__dirname, '..', '..') + '/index.html');

  window.webContents.on('did-finish-load', function(){
    window.webContents.send('loaded', {
      appName: json.name,
      electronVersion: process.versions.electron,
      nodeVersion: process.versions.node,
      chromiumVersion: process.versions.chrome
    });
  });

  window.on('closed', function() {
    window = null;
  });

});
