
function loadShader(vertexShaderUrl, fragmentShaderUrl, modelUrl,scene)
{
    Promise.all([
        fetch(vertexShaderUrl).then(res => res.text()),
        fetch(fragmentShaderUrl).then(res => res.text())
      ]).then(function (shaders) {
        var vertexShader = shaders[0];
        var fragmentShader = shaders[1];
      
        var customMaterial = new THREE.ShaderMaterial({
          uniforms: {
            pointLightPosition: { type: "v3", value: pointLight.position },
            pointLightColor: { type: "c", value: pointLight.color },
            ambientLightColor: { type: "c", value: ambientLight.color },
            diffuse: { type: "c", value: new THREE.Color(0xff0000) }, // 漫反射颜色
            specular: { type: "c", value: new THREE.Color(0x111111) }, // 镜面反射颜色
            shininess: { type: "f", value: 200.0 } // 高光强度
          },
          vertexShader: vertexShader,
          fragmentShader: fragmentShader
        });
      
        loader.load(modelUrl, function (geometry) {
          var mesh = new THREE.Mesh(geometry, customMaterial);
          mesh.scale.set(0.3, 0.3, 0.3);
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          scene.add(mesh);
          
        });
      });
}
