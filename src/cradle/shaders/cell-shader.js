'use strict';

import VertexAttribute from '../vertex-attribute';
import Shader from '../shader';

const vec4 = require('gl-matrix').vec4;

const vertexShaderSource = require('../../../shaders/cell.vert');
const fragmentShaderSource = require('../../../shaders/cell.frag');

const uniforms = [
  new VertexAttribute('color', 4)
];

export default class extends Shader {
  constructor(renderer) {
    super(renderer, vertexShaderSource, fragmentShaderSource, [], uniforms);

    this.colorValue = vec4.fromValues(1.0, 1.0, 1.0, 1.0);
  }
}
