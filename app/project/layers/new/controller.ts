import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';
import DS from 'ember-data';
import NotificationsService from 'ember-cli-notifications/services/notification-messages-service';
import RouterService from '@ember/routing/router-service';
import Layer from 'carto-store/models/layer';
import Project from 'carto-store/models/project';
import project from 'carto-store/mirage/factories/project';

interface CartoData {
  css: string;
  sql: string;
  name: string;
}

export default class LayersNew extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  @service('store')
  storeService!: DS.Store;
  @service('notification-messages')
  notificationsService!: NotificationsService;
  @service('router')
  routerService!: RouterService;

  // from the route
  layer!: Layer;
  project!: Project;

  @action
  async create(data: CartoData) {
    let layer = this.layer;
    let project = this.project;

    layer.setProperties(data);
    await layer.save();

    project.get('layers').addObject(layer);
    await project.save();

    await this.routerService.transitionTo('project', project.id);
    this.notificationsService.info(`Layer '${data.name}' created!`);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'layers/new': LayersNew;
  }
}
