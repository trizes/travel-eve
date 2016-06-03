import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('events');
  this.route('event', { path: '/:event_id' });
  this.route('404', { path: '/*wildcard' });
});

export default Router;
