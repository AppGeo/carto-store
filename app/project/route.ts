import Route from '@ember/routing/route';

export default class Project extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  model() {
    let  { projectId } = this.paramsFor('project');

    return this.store.findRecord('project', projectId);
  }
}
