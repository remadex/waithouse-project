import Component from '@glimmer/component';
import { inject } from '@ember/service';

export default class UiHeaderUiComponent extends Component {
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
}
