import FriendsBaseController from './base';

export default FriendsBaseController.extend({
	actions: {
		cancel: function() { // cancel at edit will route to show
			console.log('cancel action, friends edit controller');
			// return true; // bubble
			this.transitionToRoute('friends.show', this.get('model'));
			return false; // do not bubble
		}
	}
});
