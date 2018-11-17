import Route from '@ember/routing/route';
import Controller from './controller';
import Layer from 'carto-store/models/layer';

export default class LayerIndex extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  setupController(controller: Controller, layer: Layer) {
    controller.setProperties({
      layer
    });
  }
}
