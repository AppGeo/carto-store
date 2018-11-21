import Adapter from './application';

export default class Layer extends Adapter {
  
}

// DO NOT DELETE: this is how TypeScript knows how to look up your adapters.
declare module 'ember-data/types/registries/adapter' {
  export default interface AdapterRegistry {
    'layer': Layer;
  }
}
