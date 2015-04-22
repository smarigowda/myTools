import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('article', {
      friend: this.modelFor('friends/show')
    });
  },
  actions: {
    save: function() {
      var model = this.modelFor('articles/new');
      model.save().then( 
        () => {
          this.transitionTo('articles');
        }
      );
    },
    cancel: function() {
      this.transitionTo('articles');
    }
  }
});