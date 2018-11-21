import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import Controller from './controller';
import DS from 'ember-data';
import LayerModel from 'carto-store/models/layer';

export interface Data {
  layers: DS.RecordArray<LayerModel>;
  projectId: string;
}

interface Params {
  projectId?: string;
}

export default class ProjectIndex extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  model() {
    let { projectId }: Params = this.paramsFor('project');

    return hash({
      layers: this.store.query('layer', { projectId }),
      projectId
    });
  }

  setupController(controller: Controller, resolved: Data) {
    controller.setProperties(resolved);
  }
}
