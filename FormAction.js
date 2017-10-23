'use strict';

const dispatcher = require('./dispatcher');
const act = require('./act');

const FormAction = {
  send(val) {
    dispatcher.dispatch({
      type: act.SEND,
      value: val
    });
  }
};

module.exports = FormAction;
