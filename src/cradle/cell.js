'use strict';

import VertexBuffer from './vertex-buffer';
import IndexBuffer from './index-buffer';

import CellShader from './shaders/cell-shader';

const mat4 = require('gl-matrix').mat4;
const vec2 = require('gl-matrix').vec2;
const vec3 = require('gl-matrix').vec3;
const vec4 = require('gl-matrix').vec4;

const size = 50.0;
const width = size * 2.0;
const height = Math.sqrt(3.0) / 2.0 * width;

let vertices = [];

for (let i = 0; i < 6; i++) {
  const angle = (Math.PI * 2.0 / 6.0) * i;

  vertices.push(Math.cos(angle) * size, Math.sin(angle) * size, 0.0);
}

let shader = null;
let vertexBuffer = null;

export default class {
  constructor(game, position = vec2.create()) {
    this.game = game;
    this.renderer = this.game.renderer;
    this.position = vec2.clone(position);
    this.worldPosition = vec3.fromValues(this.position[0] * width * 0.75, this.position[1] * height + (this.position[0] % 2.0 == 0.0 ? 0.0 : height / 2.0), 0.0);
    this.transformation = mat4.fromTranslation(mat4.create(), vec3.fromValues(this.worldPosition[0], this.worldPosition[1], 0));

    if (!shader) {
      shader = new CellShader(this.renderer);
    }

    if (!vertexBuffer) {
      vertexBuffer = new VertexBuffer(this.renderer, vertices);
    }
  }

  draw() {
    shader.colorValue = this.color;
    this.renderer.draw(shader, vertexBuffer, null, this.transformation, true, 'TRIANGLE_FAN');

    shader.colorValue = vec4.fromValues(1.0, 1.0, 1.0, 1.0);
    this.renderer.draw(shader, vertexBuffer, null, this.transformation, true, 'LINE_LOOP');
  }
}
