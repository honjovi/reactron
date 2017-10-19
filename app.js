'use strict';

require('babel-register')({plugins: 'transform-react-jsx'});
const React = require('react');
const ReactDOM = require('react-dom');
const rootDOM = document.getElementById('root-dom');
ReactDOM.render(React.createElement('h1', null, 'Hello Reactron!'), rootDOM);
