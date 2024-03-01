varying vec3 vNormal;
varying vec3 vWorldPosition; // 传递物体的世界坐标

void main() {
    vNormal = normalMatrix * normal;
    vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz; // 计算世界坐标
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}