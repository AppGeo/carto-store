import DS from 'ember-data';
import { attr } from '@ember-decorators/data';
import { hasMany } from '@ember-decorators/data';
import VariationCarto from './variation-carto';

export default class Visualization extends DS.Model.extend({

}) {
  @attr('string') name!: string;
  @hasMany('variation-carto') variations!: DS.RecordArray<VariationCarto>;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'visualization': Visualization;
  }
}
