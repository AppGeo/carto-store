import Route from '@ember/routing/route';

export interface ProjectParams {
  projectId: string;
}
export default class Project extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  model({ projectId }: ProjectParams) {
    return this.store.findRecord('project', projectId);
  }
}
