import Route from '@ember/routing/route';

interface Params {
  layerId: string
}

export default class Layer extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  model({ layerId }: Params) {
    return this.store.findRecord('layer', layerId);
  }
}
