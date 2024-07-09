/*

IMPORTANT! PLEASE READ
This file regulates the creation of the game browser window and some process communication
This is largely irrelevant to actual game mechanics.

*/

const { app, BrowserWindow } = require('electron'); //import dependency
const path = require('path'); //same

if (require('electron-squirrel-startup')) {
  app.quit();
} //idek some electron thing

const createWindow = () => {

  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
    
  }); //create game window

  win.loadFile(path.join(__dirname, 'nightmenu.html')); //load main menu
  
  win.hide();
  win.maximize();
  win.show();
  //don't show until maximized
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
//ensure closure
