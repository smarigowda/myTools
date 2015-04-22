import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		// create a friend record and pass it on to friends/new controller
		return this.store.createRecord('friend');
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
