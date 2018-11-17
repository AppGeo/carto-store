import Controller from '@ember/controller';
import Visualization from 'carto-store/models/visualization';

export default class VisualizationIndex extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  visualization!: Visualization;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'visualization/index': VisualizationIndex;
  }
}
