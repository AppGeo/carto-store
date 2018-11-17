import Controller from '@ember/controller';
import Layer from 'carto-store/models/layer';

export default class LayerIndex extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  layer!: Layer;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'layer/index': LayerIndex;
  }
}
