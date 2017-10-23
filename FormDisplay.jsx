'use strict';

const Component = require('react').Component;

class FormDisplay extends Component {
	render() {
		return (
			<div>{this.props.data}</div>
		);
	}
}

module.exports = FormDisplay;
