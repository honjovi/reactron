'use strict';

// workaround to the issue (https://github.com/facebook/flux/issues/351).

module.exports = {
	convert: function(containerClass) {
		const tmp = containerClass;
		containerClass = function(...args) {
			return new tmp(...args);
		};
		containerClass.prototype = tmp.prototype;
		containerClass.getStores = tmp.getStores;
		containerClass.calculateState = tmp.calculateState;
		return containerClass;
	}
};
