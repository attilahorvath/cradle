'use strict';

import Cell from '../cell';

const vec4 = require('gl-matrix').vec4;

export default class extends Cell {
  constructor(game, position = vec2.create()) {
    super(game, position);

    this.color = vec4.fromValues(0.2, 0.2, 0.2, 1.0);
  }
}
