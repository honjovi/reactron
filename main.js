'use strict';


const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;
const redux = require('redux');
const ipcMain = require('electron').ipcMain;


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
	
	const count = (state, action) => {
		state = state || 0;
		switch(action.type) {
		case "COUNT_UP":
			return state + 1;
		}
		return state;
	}
	
	const myStore = redux.createStore((state, action) => {
		state = state || {};
		return {count: count(state.count, action)};
	});
	
	const sendRender = () => {
		mainWindow.webContents.send("render", myStore.getState())
	};

	ipcMain.on("dispatch-store", (sender, e) => {
		myStore.dispatch(e);
		sendRender();
	});

	mainWindow.webContents.on("dom-ready", sendRender);
});



