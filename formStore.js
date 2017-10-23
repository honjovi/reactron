const ReduceStore = require('flux/utils').ReduceStore;
const dispatcher = require('./dispatcher');
const act = require('./act');

// Store
class FormStore extends ReduceStore {

	getInitialState() {
		return {'value': null};
	}

	reduce(state, action) {
		switch (action.type) {
			case act.SEND:
				return {'value': action.value};
		}
	}

}

// Storeのインスタンス生成
const formStore = new FormStore(dispatcher);
module.exports = formStore;
