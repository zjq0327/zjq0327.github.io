uniform vec3 pointLightPosition;
uniform vec3 pointLightColor;
uniform vec3 ambientLightColor;
uniform vec3 diffuse;
uniform vec3 specular;
uniform float shininess;

varying vec3 vNormal;
varying vec3 vWorldPosition; 

void main() {
    vec3 lightColor = pointLightColor;
    vec3 lightDirection = normalize(pointLightPosition - vWorldPosition); 
    vec3 viewDirection = normalize(-vWorldPosition); 
    vec3 normal = normalize(vNormal);

    vec3 ambient = 0.2 * ambientLightColor;
    vec3 diff = max(dot(normal, lightDirection), 0.0) * diffuse;
    vec3 spec = vec3(0.0);

    if (dot(normal, lightDirection) > 0.0) {
        vec3 reflectionDirection = reflect(-lightDirection, normal);
        spec = pow(max(dot(reflectionDirection, viewDirection), 0.0), shininess) * specular;
    }

    vec3 color = ambient + diff + spec;
    gl_FragColor = vec4(color, 1.0);
}