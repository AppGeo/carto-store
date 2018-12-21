import Route from '@ember/routing/route';

export default class Project extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  model({ projectId }) {
    return this.store.findRecord('project', projectId);
  }
}
