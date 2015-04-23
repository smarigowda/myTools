import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		console.log('friends index route, model setup');
		return this.store.findAll('friend');
	},
	// actions: {
	// 	delete: function(friend) {
	// 		friend.destroyRecord();
	// 		return false;
	// 	}
	// }
});
