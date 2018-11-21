import DS from 'ember-data';
import { attr } from '@ember-decorators/data';
import { hasMany } from '@ember-decorators/data';
import LayerModel from './layer';

export default class Project extends DS.Model.extend({

}) {
  @attr('string') name!: string;
  @hasMany('layer') layers!: DS.RecordArray<LayerModel>;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'project': Project;
  }
}
