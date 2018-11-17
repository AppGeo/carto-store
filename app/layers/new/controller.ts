import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';
import DS from 'ember-data';

interface CartoData {
  css: string;
  sql: string;
  name: string;
}

export default class LayersNew extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  @service('store') storeService!: DS.Store;

  @action
  async create(data: CartoData) {
    let store = this.storeService;
    let variation = store.createRecord('variation-carto', {
      css: data.css,
      sql: data.sql
    });

    await variation.save();

    let layer = store.createRecord('layer', {
      name: data.name
    });

    layer.get('variations').addObject(variation);
    await layer.save();
    alert('saved');
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'layers/new': LayersNew;
  }
}
