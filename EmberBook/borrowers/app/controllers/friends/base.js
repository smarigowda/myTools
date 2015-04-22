	import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save: function() { // save action is common to both new and edit, hence it is at base.js
			console.log('save action, friends new controller');
			if (this.get('isValid')) {
				console.log('isValid = true');
				var mymodel = this.get('model');
				this.get('logmodel')(mymodel);
				this.get('model').save().then( 
					friend => {
						// new friend visible only after save
						this.transitionToRoute('friends.show', friend);
						console.log(this.get('model'));
					}
				);

			} else {
				console.log('isValid = false');
				this.set('errorMessage', 'fill all the fields');
			}
			// return true; // bubble
			return false // do not bubble
		}
		// ,
		// cancel will be overridden in edit and new subclasses
		// cancel: function() {
		// 	console.log('cancel action, friends base controller');
		// 	return true; // bubble
		// 	//this.transitionToRoute('friends');
		// 	// return false; // do not bubble
		// }
	},
	hasEmail: Ember.computed.notEmpty('model.email'),
	hasFirstName: Ember.computed.notEmpty('model.firstName'),
	hasLastName: Ember.computed.notEmpty('model.lastName'),
	hasTwitter: Ember.computed.notEmpty('model.twitter'),
	isValid: Ember.computed.and('hasEmail', 'hasFirstName', 'hasLastName', 'hasTwitter'),

		// 'model.email',
		// 'model.firstName',
		// 'model.lastName',
		// 'model.twitter',
		// () => {
		// 	return 	!Ember.isEmpty(this.get('model.email')) &&
		// 			!Ember.isEmpty(this.get('model.email')) &&
		// 			!Ember.isEmpty(this.get('model.email')) &&
		// 			!Ember.isEmpty(this.get('model.email'))
		// }
		// },
		// function() {
		// 	return 	() => { 
		// 		return !Ember.isEmpty(this.get('model.email')) &&
		// 			!Ember.isEmpty(this.get('model.email')) &&
		// 			!Ember.isEmpty(this.get('model.email')) &&
		// 			!Ember.isEmpty(this.get('model.email'))
		// 	}();
		// }
	// ),
	logmodel: model => {
    		console.log('model is ... ' + model);
  		}
});
