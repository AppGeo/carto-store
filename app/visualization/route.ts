import Route from '@ember/routing/route';

interface Params {
  visualizationId: string
}

export default class Visualization extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  model({ visualizationId }: Params) {
    return this.store.findRecord('visualization', visualizationId, { include: 'variations' });
  }
}
