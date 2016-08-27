'use strict';

import UnknownCell from './cells/unknown-cell';

const vec2 = require('gl-matrix').vec2;
const vec4 = require('gl-matrix').vec4;

export default class {
  constructor(game) {
    this.game = game;
    this.renderer = game.renderer;

    this.cells = [];

    for (let i = 0; i < 10; i++) {
      this.cells.push(new UnknownCell(this.game, vec2.fromValues(i, 1)));
      this.cells.push(new UnknownCell(this.game, vec2.fromValues(i, 2)));
      this.cells.push(new UnknownCell(this.game, vec2.fromValues(i, 3)));
      this.cells.push(new UnknownCell(this.game, vec2.fromValues(i, 4)));
    }
  }

  draw() {
    for (let cell of this.cells) {
      cell.draw();
    }
  }
}
