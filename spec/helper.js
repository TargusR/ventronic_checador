var path = require('path');

module.exports = {
  appPath: function() {
    switch (process.platform) {
      case 'darwin':
        return path.join(__dirname, '..', '.tmp', 'mac', 'Checador.app', 'Contents', 'MacOS', 'Checador');
      case 'linux':
        return path.join(__dirname, '..', '.tmp', 'linux', 'Checador');
      default:
        throw 'Unsupported platform';
    }
  }
};
