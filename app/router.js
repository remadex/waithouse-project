import EmberRouter from '@ember/routing/router';
import config from 'waithouse/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('search');
  this.route('favorites');
});
