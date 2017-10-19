"use strict";

const ipcRenderer = require('electron').ipcRenderer;
const React = require("react");

module.exports = class MyApp extends React.Component {
  _onClick() {
    ipcRenderer.send("dispatch-store", {
      "type": "COUNT_UP"
    });
  }
  render() {
    return <div>
      <h1>React in Electron!</h1>
      <p>{this.props.count}</p>
      <button onClick={this._onClick}>Click</button>
    </div>;
  }
}