import Ember from 'ember';

export default Ember.Route.extend({
	activate: function() {
		console.log('--- friends.edit route activated ---');
		// console.log(this.model);
		// console.log(this.get('model'));
	},
	// model: function() {
	// 	console.log('--- friends edit route, model setup ---');
	// 	return true;
	// 	// this.super();
	// },
	deactivate: function() {
		var model = this.modelFor('friends/edit');
		model.rollback();
	}
	// model is automatically set by router, looks up the id in URL
});