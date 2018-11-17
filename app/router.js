import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('layers', function() {
    this.route('new');
  });
  this.route('layer', { path: '/layers/:layerId' }, function() {
    
  });
});

export default Router;
