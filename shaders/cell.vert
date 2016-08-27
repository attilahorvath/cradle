uniform mat4 modelView;
uniform mat4 projection;

attribute vec3 vertexPosition;

void main() {
  gl_Position = projection * modelView * vec4(vertexPosition, 1.0);
}
