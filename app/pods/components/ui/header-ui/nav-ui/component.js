import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject } from '@ember/service';
import { action } from '@ember/object';

export default class UiHeaderUiNavUiComponent extends Component {
  @tracked isOpen = false;
  @inject router;
  get activeRoute() {
    switch (this.router.currentRouteName) {
      case 'index':
        return 'Accueil';
      case 'search':
        return 'Recherche';
      case 'favorites':
        return 'Favoris';
      default:
        return '';
    }
  }
  @action
  close() {
    this.isOpen = false;
  }
}
