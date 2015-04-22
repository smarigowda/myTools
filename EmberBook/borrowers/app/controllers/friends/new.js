import FriendsBaseController from './base';

export default FriendsBaseController.extend({
	actions: {
		// overriding base class method
		cancel: function() { // cancel at new will route to index
			var _this = this;
			console.log('cancel action, friends new controller....');
			var thismodel = this.get('model'); // data is empty
			// assync
			// this.get('model').then(function(m) {
			// 	console.log(m);
			// });
			// return true; // bubble
			// this.transitionToRoute('friends.index');
			this.transitionToRoute('friends');
			return false; // do not bubble
		}
	}
});
