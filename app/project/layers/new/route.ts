import Route from '@ember/routing/route';
import Controller from './controller';
import Layer from 'carto-store/models/layer';
export default class LayersNew extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  model() {
    return this.store.createRecord('layer');
  }

  setupController(controller: Controller, layer: Layer) {
    let project = this.modelFor('project');

    controller.setProperties({
      layer,
      project
    });
  }
}
