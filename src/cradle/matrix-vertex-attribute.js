'use strict';

import VertexAttribute from './vertex-attribute';

export default class extends VertexAttribute {
  constructor(name, size = 4) {
    super(name, size * size);

    this.size = size;

    this.uniformMethod = `uniformMatrix${this.size}fv`;
  }

  setUniformValue(gl, location, value) {
    gl[this.uniformMethod](location, false, value);
  }
}
