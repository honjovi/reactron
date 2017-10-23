'use strict';

const Component = require('React').Component;
const formStore = require('./formStore');
const FormInput = require('./FormInput');
const FormDisplay = require('./FormDisplay');

// View (React Component)
class FormApp extends Component {

	static getStores() {
		return [formStore];
	}

	static calculateState(prevState) {
		console.log('prevstate: ' + prevState);
		return formStore.getState();
	}

	render() {
		console.log(this.state);
		return (
			<form>
				<FormInput/>
				<FormDisplay data={this.state.value}/>
			</form>
		);
	}

}

module.exports = FormApp;
