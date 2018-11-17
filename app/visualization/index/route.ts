import Route from '@ember/routing/route';
import Controller from './controller';
import Visualization from 'carto-store/models/visualization';

export default class VisualizationIndex extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  setupController(controller: Controller, visualization: Visualization) {
    controller.setProperties({
      visualization
    });
  }
}
