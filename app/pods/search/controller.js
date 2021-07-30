import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SearchController extends Controller {
  @tracked query;
  @tracked result;

  @action
  async searchTracks(e) {
    e.preventDefault();
    let res = await fetch(
      `https://api.soundcloud.com/tracks?client_id=TBjt0YYjR6NeqDEMaiMXQJSJWw3JjZ0a&q=${this.query}&limit=50`
    );
    res = await res.json();
    this.result = res;
  }
}
