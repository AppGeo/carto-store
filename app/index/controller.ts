import Controller from '@ember/controller';
import { service } from '@ember-decorators/service';
import { action } from '@ember-decorators/object';
import DS from 'ember-data';
import NotificationsService from 'ember-cli-notifications/services/notification-messages-service';

interface ProjectData {
  name: string;
}

export default class Index extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  @service('store')
  storeService!: DS.Store;
  @service('notification-messages')
  notificationsService!: NotificationsService;

  createModalVisible?: boolean;

  @action
  async createProject(data: ProjectData, event: Event) {
    if (event) {
      event.preventDefault();
    }

    let project = this.storeService.createRecord('project', data);

    await project.save();

    this.set('createModalVisible', false);
    await this.transitionToRoute('project', project.id);
    this.notificationsService.success(`Welcome to project '${data.name}'!`);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'index': Index;
  }
}
