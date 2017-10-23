'use strict';

require('babel-register')({plugins: 'transform-react-jsx'});
const React = require('react');
const render = require('react-dom').render;
const FormAppContainer = require('./FormAppContainer');

// ReactDom
render(React.createElement(FormAppContainer), document.getElementById('root-dom'));
