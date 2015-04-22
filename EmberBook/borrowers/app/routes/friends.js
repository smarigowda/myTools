import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		save: function() {
			console.log('save action, bubbled up-to friends route');
			return false; // bubble
		},
		cancel: function() {
			console.log('cancel action, bubbled up-to friends route');
			return false; // bubble
		},
		delete: function(friend) {
			friend.destroyRecord().then( () => {
				this.transitionTo('friends.index');
			});
		}
	}
});
