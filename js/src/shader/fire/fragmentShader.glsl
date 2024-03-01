uniform vec3 iResolution;
uniform float iTime;

#define FLAMECOLOR vec3(50.0, 5.0, 1.0)
#define PI 3.14159

float FlameShape(vec2 uv) {
    /*play with these values

    try:
        float flameControl1 = 4.5;
        float flameControl2 = .5;
    */
    float flameControl1 = 5.;
    float flameControl2 = 1.5;
    
    float a = mod(atan(uv.x,uv.y+2.),PI*2. )/flameControl1-PI/flameControl1;
    float angle = PI-(.5+.25);
    float d = length(uv-vec2(0., -2.)) * sin(angle+abs(a));
    return smoothstep(0., flameControl2, d);
}

mat2 Rot(float a) {
    float s=sin(a), c=cos(a);
    return mat2(c, -s, s, c);
}

float R21 (vec2 p) {
    return fract(sin(dot(p.xy, vec2(2.3245,5.234)))*123.5632145);
}

float NoiseValue (vec2 uv) {
    vec2 gv = fract(uv);
    vec2 id = floor(uv);
    
    gv = gv * gv * (3. - 2. * gv);

    float a = R21(id);
    float b = R21(id + vec2(1., 0.));
    float c = R21(id + vec2(0., 1.));
    float d = R21(id + vec2(1., 1.));

    return mix(a, b, gv.x) + (c - a)* gv.y * (1. - gv.x) + (d - b) * gv.x * gv.y;
}

float SmoothNoise (vec2 uv) {
    float value = 0.;
    float amplitude = .5;

    for (int i = 0; i < 8; i++) {
        value += NoiseValue(uv) * amplitude;
        uv *= 2.;
        amplitude *= .5;
    }

    return value;
}

vec3 Flame(vec2 uv) {
    uv *= 6.;
    
    vec3 col = vec3(0.);
    float shape = FlameShape(uv);
    // smoothstep(0., 6.5, abs(uv.x)+abs(uv.y));

    uv *= Rot(2.5);
    
    vec2 rn = vec2(0.);
    rn.x = SmoothNoise(uv + 1.984 + 4.5*iTime);
    rn.y = SmoothNoise(uv + 1. + 4.5*iTime);
    
    col += SmoothNoise(uv+rn*2.5);
    col -= shape;
    
    col = col / (1.5+col);
    col = pow(col, vec3(3./2.2));
    
    // background white
    // col = clamp(col, 0., 1.);
    
    col *= FLAMECOLOR;
    
    return col;
}




void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord-.5*iResolution.xy)/iResolution.y;

    vec3 col = Flame(uv);
    
    // 将背景颜色改为红色
    // col = mix(col, vec3(1.0, 0.0, 0.0), step(0.0, col.r));
    
    fragColor = vec4(col, 1.0);
}


void main() {
mainImage(gl_FragColor, gl_FragCoord.xy);
}