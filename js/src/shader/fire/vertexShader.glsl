uniform float iTime;

void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vec4 finalPosition = projectionMatrix * mvPosition;
    
    // 添加一些对位置的变换，例如旋转
    float rotationAngle = 2.0 * iTime;  // 使用时间来实现旋转动画
    mat3 rotationMatrix = mat3(
        cos(rotationAngle), -sin(rotationAngle), 0,
        sin(rotationAngle), cos(rotationAngle), 0,
        0, 0, 1
    );
    vec3 rotatedPosition = rotationMatrix * mvPosition.xyz;
    
    gl_Position = vec4(rotatedPosition, 1.0);
}