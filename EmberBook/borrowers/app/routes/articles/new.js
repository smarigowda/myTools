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
      // var model = this.get('model'); // does not work
      console.log('save at articles new route');

      model.save().then( 
        () => {
          this.transitionTo('articles');
        }
      );
    },
    cancel: function() {
      this.transitionTo('articles');
    }
  },
    deactivate: function() {
      console.log('-- deactivate hook, new articles route --');
      var model = this.modelFor('articles/new');
      if (model.get('isNew')) {
        // remove record from the store
        model.destroyRecord();
      }
  }
});