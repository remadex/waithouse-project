import Component from '@glimmer/component';
import { action } from '@ember/object';
import SC from 'soundcloud-api';
import { tracked } from '@glimmer/tracking';

export default class ResultListResultItemComponent extends Component {
  @tracked songWidget;
  @tracked isOpen = false;

  @action
  setWidget() {
    // var iframeElement = document.querySelector(`#track${this.args.song.id}`);
    // this.songWidget = SC.Widget(iframeElement);
  }
  @action
  playSong() {
    this.isOpen = true;
    var iframeElement = document.querySelector(`#track${this.args.song.id}`);
    this.songWidget = SC.Widget(iframeElement);
    this.songWidget.play();
  }
}
