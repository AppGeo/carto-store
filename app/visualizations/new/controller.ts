import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';
import DS from 'ember-data';

interface CartoData {
  css: string;
  sql: string;
  name: string;
}

export default class VisualizationsNew extends Controller.extend({
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

    let visualization = store.createRecord('visualization', {
      name: data.name
    });

    visualization.get('variations').addObject(variation);
    await visualization.save();
    alert('saved');
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'visualizations/new': VisualizationsNew;
  }
}
