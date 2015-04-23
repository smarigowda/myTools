import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		// create a friend record and pass it on to friends/new controller
		return this.store.createRecord('friend');
	},
	activate: function() {
		console.log('--- activate hook called ---');
	},
	deactivate: function() {
		console.log('--- deactivate hook called ---');
		// grab the model loaded in this route
		var model = this.modelFor('friends/new');
		// check if the model is isNew state
		// which means it was not saved to backend
		if (model.get('isNew')) {
			// remove record from the store
			model.destroyRecord();
		}
	}
	// actions: {
	// 	save: function() {
	// 		console.log('save action, bubbled up-to friends new route');
	// 		return true; // bubble
	// 	},
	// 	cancel: function() {
	// 		console.log('cancel action, bubbled up-to friends new route');
	// 		return true; // bubble
	// 	}
	// }
});
