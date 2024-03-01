
async function main() {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    var webGLRenderer = new THREE.WebGLRenderer();
    webGLRenderer.setClearColor(0xEEEEEE);
    webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    webGLRenderer.shadowMap.enabled = true;
    webGLRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

    camera.position.x = 100;
    camera.position.y = 100;
    camera.position.z = 100;

    camera.lookAt(scene.position);
    controls = new THREE.OrbitControls(camera, webGLRenderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    document.getElementById("output").appendChild(webGLRenderer.domElement);

    // // 创建 XYZ 坐标轴
    // var axesHelper = new THREE.AxesHelper(100); // 参数表示坐标轴长度
    // scene.add(axesHelper);
    var rotatingObjects = [];

    // 添加一个平面作为地板
    var planeGeometry = new THREE.PlaneGeometry(500, 500);
    var planeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -10;
    plane.receiveShadow = true;
    scene.add(plane);

    // add light
    var pointLight = new THREE.PointLight(0xffffff, 1, 150);
    pointLight.position.set(-30, 70, 30);
    pointLight.castShadow = true;
    scene.add(pointLight);

    // light pos
    const lightSphere = new THREE.Mesh(
        new THREE.SphereBufferGeometry(1, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    lightSphere.position.copy(pointLight.position);
    scene.add(lightSphere);

    var ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    var loader = new THREE.STLLoader();
    loader.load("dragon_red1.stl", function (geometry) {
        var mat = new THREE.MeshPhongMaterial({ color: 0xcf0000, specular: 0x111111, shininess: 200 });
        var mesh = new THREE.Mesh(geometry, mat);
        mesh.scale.set(1, 1, 1);
        
        mesh.position.y = 10;
        mesh.position.set(-34,15,0);
        mesh.rotation.x = -Math.PI / 2;
        mesh.rotation.z = Math.PI ;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        scene.add(mesh);
        rotatingObjects.push(mesh);

    });

    loader.load("dragon_red2.stl", function (geometry) {
        var mat = new THREE.MeshPhongMaterial({ color: 0xcf0000, specular: 0x111111, shininess: 200 });
        var mesh = new THREE.Mesh(geometry, mat);
        mesh.scale.set(1, 1, 1);
        
        mesh.position.y = 10;
        mesh.position.set(-34,15,0);
        mesh.rotation.x = -Math.PI / 2;
        mesh.rotation.z = Math.PI ;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        scene.add(mesh);
        rotatingObjects.push(mesh);

    });

    loader.load("dragon_blue1.stl", function (geometry) {
        var mat = new THREE.MeshPhongMaterial({ color: 0x00a8f3, specular: 0x111111, shininess: 200 });
        var mesh = new THREE.Mesh(geometry, mat);
        mesh.scale.set(1, 1, 1);
        
        mesh.position.y = 10;
        mesh.position.set(-34,15,0);
        mesh.rotation.x = -Math.PI / 2;
        mesh.rotation.z = Math.PI ;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        scene.add(mesh);
        rotatingObjects.push(mesh);

    });

    loader.load("dragon_blue2.stl", function (geometry) {
        var mat = new THREE.MeshPhongMaterial({ color: 0x00a8f3, specular: 0x111111, shininess: 200 });
        var mesh = new THREE.Mesh(geometry, mat);
        mesh.scale.set(1, 1, 1);
        
        mesh.position.y = 10;
        mesh.position.set(-34,15,0);
        mesh.rotation.x = -Math.PI / 2;
        mesh.rotation.z = Math.PI ;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        scene.add(mesh);
        rotatingObjects.push(mesh);

    });

    loader.load("dragon_white.stl", function (geometry) {
        var mat = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0x111111, shininess: 200 });
        var mesh = new THREE.Mesh(geometry, mat);
        mesh.scale.set(1, 1, 1);
        
        mesh.position.y = 10;
        mesh.position.set(-34,15,0);
        mesh.rotation.x = -Math.PI / 2;
        mesh.rotation.z = Math.PI ;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        scene.add(mesh);
        rotatingObjects.push(mesh);

    });

    loader.load("dragon_yellow1.stl", function (geometry) {
        var mat = new THREE.MeshPhongMaterial({ color: 0xffff00, specular: 0x111111, shininess: 200 });
        var mesh = new THREE.Mesh(geometry, mat);
        mesh.scale.set(1, 1, 1);
        
        mesh.position.y = 10;
        mesh.position.set(-34,15,0);
        mesh.rotation.x = -Math.PI / 2;
        mesh.rotation.z = Math.PI ;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        scene.add(mesh);
        rotatingObjects.push(mesh);

    });

    loader.load("dragon_yellow2.stl", function (geometry) {
        var mat = new THREE.MeshPhongMaterial({ color: 0xffff00, specular: 0x111111, shininess: 200 });
        var mesh = new THREE.Mesh(geometry, mat);
        mesh.scale.set(1, 1, 1);
        
        mesh.position.y = 10;
        mesh.position.set(-34,15,0);
        mesh.rotation.x = -Math.PI / 2;
        mesh.rotation.z = Math.PI ;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        scene.add(mesh);
        rotatingObjects.push(mesh);

    });

    // foot
    loader.load("dragon_foot_red.stl", function (geometry) {
    var mat = new THREE.MeshPhongMaterial({ color: 0xff0000, specular: 0x111111, shininess: 200 });
    var mesh = new THREE.Mesh(geometry, mat);
    mesh.scale.set(1, 1, 1);
    
    mesh.position.y = 10;
    mesh.position.set(-34,17,0);
    mesh.rotation.x = -Math.PI / 2;
    mesh.rotation.z = Math.PI ;
    mesh.castShadow = true;
    mesh.receiveShadow = true;




    scene.add(mesh);
    rotatingObjects.push(mesh);

    });

    
    loader.load("dragon_foot_yellow.stl", function (geometry) {
        var mat = new THREE.MeshPhongMaterial({ color: 0xffff00, specular: 0x111111, shininess: 200 });
        var mesh = new THREE.Mesh(geometry, mat);
        mesh.scale.set(1, 1, 1);
        
        mesh.position.y = 10;
        mesh.position.set(-34,17,0);
        mesh.rotation.x = -Math.PI / 2;
        mesh.rotation.z = Math.PI ;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
  


        scene.add(mesh);
        rotatingObjects.push(mesh);

    });




    // tail

    loader.load("tail_red.stl", function (geometry) {
        var mat = new THREE.MeshPhongMaterial({ color: 0xcf0000, specular: 0x111111, shininess: 200 });
        var mesh = new THREE.Mesh(geometry, mat);
        mesh.scale.set(0.3, 0.3, 0.3);
        
        mesh.position.set(-52,21,0);

        mesh.rotation.x = -Math.PI / 2;
        mesh.rotation.z = Math.PI ;
        mesh.castShadow = true;
        mesh.receiveShadow = true;


        const rotationOffset = new THREE.Euler(-Math.PI /2, 0, -Math.PI/6 , 'XYZ');
        // // 将rotationOffset添加到mesh的旋转上
        mesh.rotation.x += rotationOffset.x;
        mesh.rotation.y += rotationOffset.y;
        mesh.rotation.z += rotationOffset.z;


        scene.add(mesh);
        rotatingObjects.push(mesh);

    });


    loader.load("tail_yellow.stl", function (geometry) {
        var mat = new THREE.MeshPhongMaterial({ color: 0xffff00, specular: 0x111111, shininess: 200 });
        var mesh = new THREE.Mesh(geometry, mat);
        mesh.scale.set(0.3, 0.3, 0.3);
        
        mesh.position.y = 10;
        mesh.position.set(-52,21,0);
        mesh.rotation.x = -Math.PI / 2;
        mesh.rotation.z = Math.PI ;
        mesh.castShadow = true;
        mesh.receiveShadow = true;


        const rotationOffset = new THREE.Euler(-Math.PI /2, 0, -Math.PI/6 , 'XYZ');
        // // 将rotationOffset添加到mesh的旋转上
        mesh.rotation.x += rotationOffset.x;
        mesh.rotation.y += rotationOffset.y;
        mesh.rotation.z += rotationOffset.z;

        scene.add(mesh);
        rotatingObjects.push(mesh);

    });

    loader.load("tail_white.stl", function (geometry) {
        var mat = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0x111111, shininess: 200 });
        var mesh = new THREE.Mesh(geometry, mat);
        mesh.scale.set(0.3, 0.3, 0.3);
        
        mesh.position.y = 10;
        mesh.position.set(-52,21,0);

        mesh.rotation.x = -Math.PI / 2;
        mesh.rotation.z = Math.PI ;
        mesh.castShadow = true;
        mesh.receiveShadow = true;


        const rotationOffset = new THREE.Euler(-Math.PI /2, 0, -Math.PI/6 , 'XYZ');
        // // 将rotationOffset添加到mesh的旋转上
        mesh.rotation.x += rotationOffset.x;
        mesh.rotation.y += rotationOffset.y;
        mesh.rotation.z += rotationOffset.z;
        
        scene.add(mesh);
        rotatingObjects.push(mesh);

    });

    // black
    loader.load("dragon_black.stl", function (geometry) {
        var mat = new THREE.MeshPhongMaterial({ color: 0x000000, specular: 0x111111, shininess: 200 });
        var mesh = new THREE.Mesh(geometry, mat);
        mesh.scale.set(1, 1, 1);
        
        mesh.position.y = 10;
        mesh.position.set(-34,15,0);
        mesh.rotation.x = -Math.PI / 2;
        mesh.rotation.z = Math.PI ;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        scene.add(mesh);
        rotatingObjects.push(mesh);

    });

    // 创建一个纹理加载器
    
    loader.load("dragon_scale.stl", function (geometry) {
        var mat = new THREE.MeshPhongMaterial({ color: 0xffd700, specular: 0x111111, shininess: 200 });

        var mesh = new THREE.Mesh(geometry, mat);
        mesh.scale.set(1, 1, 1);
        
        mesh.position.y = 10;
        mesh.position.set(-34,15,0);
        mesh.rotation.x = -Math.PI / 2;
        mesh.rotation.z = Math.PI ;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        scene.add(mesh);
        rotatingObjects.push(mesh);

    });

    // ball
    var textureLoader = new THREE.TextureLoader();

    var sphereGeometry = new THREE.SphereGeometry(3, 32, 32);

    textureLoader.load("scale.png", function(texture) {
        var phongMaterial = new THREE.MeshPhongMaterial({ map: texture});

        var sphereMesh = new THREE.Mesh(sphereGeometry, phongMaterial);
        
        sphereMesh.position.set(10, 10, 7);
        sphereMesh.castShadow = true;
        sphereMesh.receiveShadow = true;
        scene.add(sphereMesh);
        rotatingObjects.push(sphereMesh);

    });


    // fire
    const responsefragment = await fetch('js/src/shader/fire/fragmentShader.glsl');
    const fragmentShader = await responsefragment.text();
    


    var fireMaterial= new THREE.ShaderMaterial({
        uniforms:{
            iTime:{ value: 0},
            iResolution: { value: new THREE.Vector3()},
        },
        fragmentShader: fragmentShader,
    });
        
    // fire
    const fire = new THREE.Group();

    // // 创建球体
    const sphereGeometry1 = new THREE.SphereGeometry(5, 32, 32);
    const sphereMesh1 = new THREE.Mesh(sphereGeometry1, fireMaterial);

    const sphereGeometry2 = new THREE.SphereGeometry(4, 32, 32);
    const sphereMesh2 = new THREE.Mesh(sphereGeometry2, fireMaterial);

    const sphereGeometry3 = new THREE.SphereGeometry(4, 32, 32);
    const sphereMesh3 = new THREE.Mesh(sphereGeometry3, fireMaterial);

    
    const sphereGeometry4 = new THREE.SphereGeometry(4, 32, 32);
    const sphereMesh4 = new THREE.Mesh(sphereGeometry4, fireMaterial);

    const sphereGeometry5 = new THREE.SphereGeometry(4, 32, 32);
    const sphereMesh5 = new THREE.Mesh(sphereGeometry5, fireMaterial);

    const cylinderGeometry = new THREE.CylinderGeometry(5, 10, 10, 32);
    const cylinderMesh = new THREE.Mesh(cylinderGeometry, fireMaterial);

    // 将球体移动到圆柱体上方
    sphereMesh1.position.y = 5;

    sphereMesh2.position.set(2,3,3);
    sphereMesh3.position.set(-2,3,-3);
    sphereMesh4.position.set(2,3,-3);
    sphereMesh5.position.set(-2,3,3);
    // 将圆柱体位置移到原点
    cylinderMesh.position.y = -1;

    // 将球体和圆柱体添加到group中
    fire.add(cylinderMesh);
    fire.add(sphereMesh1);

    fire.add(sphereMesh2);
    fire.add(sphereMesh3);

    fire.position.set(20,30,0);
    fire.rotation.z =  -Math.PI / 2;
    // 将group添加到场景中
    scene.add(fire);
        
    rotatingObjects.push(fire);


    // firelight
    var firelight = new THREE.PointLight(0xffffff, 1, 75);
    firelight.position.set(20, 30, 0);
    firelight.castShadow = true;
    scene.add(firelight);

    rotatingObjects.push(firelight);

    // 在龙模型周围随机添加小球体
    for (var i = 0; i < 1500; i++) {
        var sphereGeometry = new THREE.SphereGeometry(.7, 16, 16);
        var sphere = new THREE.Mesh(sphereGeometry, fireMaterial);

        var radius = 20 + Math.random() * 10; 
        var angle = Math.random() * Math.PI * 2; 
        var randomX = -34 + radius * Math.cos(angle) + 9;
        var randomY = 10  + Math.random()*5; 
        var randomZ = Math.random() * 10 - 5; 

        sphere.position.set(randomX, randomY, randomZ);
        scene.add(sphere);
        rotatingObjects.push(sphere);

    }


    
    // 循环遍历rotatingObjects数组中的所有对象，并将它们的position.y属性增加5
    rotatingObjects.forEach(function(object) {
        object.position.y += 5;
    });
    // 旋转物体打包
    const specificObjectWrapper = new THREE.Object3D();

    rotatingObjects.forEach(function(object) {
        specificObjectWrapper.add(object);
    });

    scene.add(specificObjectWrapper); // 将包裹对象添加到场景中

    function render(time) {
        specificObjectWrapper.rotateY(0.01); // 绕世界Y轴旋转
        time *= 0.001; 

        controls.update();
        const canvas = webGLRenderer.domElement;

        fireMaterial.uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
        fireMaterial.uniforms.iTime.value = time;

        webGLRenderer.render(scene, camera);
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

}

main();