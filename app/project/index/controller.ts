import Controller from '@ember/controller';
import DS from 'ember-data';
import LayerModel from 'carto-store/models/layer';

export default class ProjectIndex extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  projectId!: string;
  layers!: DS.RecordArray<LayerModel>;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'project/index': ProjectIndex;
  }
}
