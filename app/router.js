import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('visualizations', function() {
    this.route('new');
  });
  this.route('visualization', { path: '/visualizations/:visualizationId' }, function() {
    
  });
});

export default Router;
