
import Ember from 'ember';
// import SessionService from 'ember-simple-auth/services/session';
// import CookiesService from 'ember-cookies/services/cookies';
import NotificationService from 'ember-cli-notifications/services/notification-messages-service';

declare global {
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
  // interface Function extends Ember.FunctionPrototypeExtensions {}
}

declare module '@ember/service' {
  interface Registry {
    // 'session': SessionService;
    // 'cookies': CookiesService;
    'notification-messages': NotificationService;
  }
}

export {};

