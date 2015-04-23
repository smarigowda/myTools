import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var articles = this.modelFor('friends.show').get('articles');
    if (articles.get('isFulfilled')) {
      articles.reload();
    }
    return articles;
  }
  // actions: {
  //   save: function(model) {
  //     console.log('save at articles index route');
  //     model.save();
  //     return false;
  //   }
  // }
});