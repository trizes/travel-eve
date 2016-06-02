import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('event');
  this.route('404', { path: '/*wildcard' });
});

export default Router;
