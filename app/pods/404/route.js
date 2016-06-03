import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (this.get('router.url') === '/404') {
      this.transitionTo('index');
    }
  }
});
