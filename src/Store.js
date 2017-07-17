import { extendObservable, computed, action } from 'mobx';

class Store {
  constructor() {
    extendObservable(this, {
      rows: 6,
      cols: 6,
      page: 1,
      // screen dimensions updated on resize
      width: window.innerWidth,
      height: window.innerHeight

    });
  }

  currentPath = computed(() => `/${this.rows}/${this.cols}/${this.page}`);
  setView = action((r, c, p) => {this.rows = r; this.cols = c; this.page = p});

  resize = action(() => {
    this.screen.width = window.innerWidth;
    this.screen.height = window.innerHeight;
  });
}

export default Store;
