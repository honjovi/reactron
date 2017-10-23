'use strict';

const Component = require('react').Component;
const FormAction = require('./FormAction');

class FormInput extends Component {
  _send(e) {
    e.preventDefault();
    FormAction.send(this.refs.myInput.value.trim());
    this.refs.myInput.value = '';
    return;
  }
  render() {
    return (
      <div>
        <input type="text" ref="myInput" defaultValue="" />
        <button onClick={this._send.bind(this)}>Send</button>
      </div>
    );
  }
}

module.exports = FormInput;
