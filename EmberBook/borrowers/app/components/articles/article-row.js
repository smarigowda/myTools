import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',
	article: null, // passed in
	articleStates: null, // passed-in
	actions: {
	   saveArticle: function(article) {	

	   	// call save action on controller, depending on the route
		this.sendAction('save', article);
	   }
	}
});
