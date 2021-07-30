import Route from '@ember/routing/route';

export default class SearchRoute extends Route {
  async model() {
    let res = await fetch(
      `https://api.soundcloud.com/tracks?client_id=TBjt0YYjR6NeqDEMaiMXQJSJWw3JjZ0a&q=akov&limit=50`
    );
    res = await res.json();
    return res;
  }
}
