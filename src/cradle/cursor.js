'use strict';

import VertexBuffer from './vertex-buffer';
import IndexBuffer from './index-buffer';

import SimpleShader from './shaders/simple-shader';

const mat4 = require('gl-matrix').mat4;
const vec2 = require('gl-matrix').vec2;
const vec3 = require('gl-matrix').vec3;
const vec4 = require('gl-matrix').vec4;

export default class {
  constructor(game) {
    this.game = game;
    this.renderer = this.game.renderer;
    this.position = vec2.create();

    const vertices = [
      0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0,
      0.0, 25.0, 0.0, 1.0, 1.0, 1.0, 1.0,
      25.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0
    ];

    this.shader = new SimpleShader(this.renderer);
    this.vertexBuffer = new VertexBuffer(this.renderer, vertices);

    addEventListener('mousemove', event => {
      let boundingRectangle = this.renderer.canvas.getBoundingClientRect();

      this.position[0] = event.clientX - boundingRectangle.left;
      this.position[1] = event.clientY - boundingRectangle.top;
    });
  }

  update() {
    this.transformation = mat4.fromTranslation(mat4.create(), vec3.fromValues(this.position[0], this.position[1], 0));
  }

  draw() {
    this.renderer.draw(this.shader, this.vertexBuffer, null, this.transformation);
  }
}
