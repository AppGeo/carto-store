import Route from '@ember/routing/route';

export default class LayersIndex extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  model() {
    return this.store.findAll('layer');
  }
}
