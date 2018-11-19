import Route from '@ember/routing/route';
import { service } from '@ember-decorators/service';
import NotificationsService from 'ember-cli-notifications/services/notification-messages-service';

export default class Application extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  @service('notification-messages')
  notificationsService!: NotificationsService;

  beforeModel() {
    this.notificationsService.setDefaultAutoClear(true);
  }
}
