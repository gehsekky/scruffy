'use strict';

const {app, BrowserWindow} = require("electron");

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  });

  mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});
