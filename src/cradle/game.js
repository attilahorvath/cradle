'use strict';

import Renderer from './renderer';
import Map from './map';
import Cursor from './cursor';

export default class {
  constructor() {
    this.renderer = new Renderer();

    this.map = new Map(this);
    this.cursor = new Cursor(this);
  }

  run() {
    this.lastTime = 0;

    requestAnimationFrame(timestamp => this.loop(timestamp));
  }

  loop(currentTime) {
    requestAnimationFrame(timestamp => this.loop(timestamp));

    const deltaTime = currentTime - this.lastTime;
    this.lastTime = currentTime;

    this.cursor.update();

    this.renderer.clear();

    this.map.draw();
    this.cursor.draw();
  }
}
