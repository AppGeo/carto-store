import DS from 'ember-data';
import { attr } from '@ember-decorators/data';
import { hasMany } from '@ember-decorators/data';

export default class Layer extends DS.Model.extend({

}) {
  @attr('string') name!: string;
  @attr('string') sql!: string;
  @attr('string') css?: string;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'layer': Layer;
  }
}
