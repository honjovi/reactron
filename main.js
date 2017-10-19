'use strict';


const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;


app.on('window-all-closed', () => {
	app.quit();
});


app.on('ready', () => {
	let mainWindow = new BrowserWindow({width: 800, height: 600});
	mainWindow.toggleDevTools();
	mainWindow.loadURL('file://' + __dirname + '/index.html');

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
});
