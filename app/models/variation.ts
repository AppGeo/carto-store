import DS from 'ember-data';

export default class Variation extends DS.Model.extend({

}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'variation': Variation;
  }
}
