// MAIN GAME FILE
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Mesh = THREE.Mesh;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var scene;
var renderer;
var camera;
var cubeGeometry;
var planeGeometry;
var sphereGeometry;
var cubeMaterial;
var planeMaterial;
var sphereMaterial;
var axes;
var cube;
var plane;
var sphere;
var spotLight;
var pointLight;
var control;
var gui;
var stats;
function init() {
    // Instantiate a new Scene object
    scene = new Scene();
    setupRenderer(); // setup the default renderer
    setupCamera(); // setup the camera
    // add an axis helper to the scene
    axes = new AxisHelper(30);
    scene.add(axes);
    //Add a Plane to the Scene
    planeGeometry = new PlaneGeometry(100, 100);
    planeMaterial = new LambertMaterial({ color: 3323158 });
    plane = new Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.rotation.x =-0.5 * Math.PI;
    plane.position.x = 20;
    plane.position.y = 0;
    plane.position.z = 0;
    scene.add(plane);
    console.log("Added Plane Primitive to scene...");
    
   // Add the body to the scene
   cubeGeometry = new BoxGeometry(3.75, 7.99, 7.99);
    cubeMaterial = new LambertMaterial({ color: 0xff0000 });
    cube = new Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.position.x = -4;
    cube.position.y = 16;
    cube.position.z = 0;
    scene.add(cube);
    console.log("Added the body  to scene...");
    
    // Add the body to the scene
   cubeGeometry = new BoxGeometry(3.48, 4.48,4.48);
    cubeMaterial = new LambertMaterial({ color: 231108114 });
    cube = new Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.position.x = -4;
    cube.position.y = 21.5;
    cube.position.z = 0;
    scene.add(cube);
    console.log("Added the body  to scene...");
    
   
    // Add the left arm to the scene
   cubeGeometry = new BoxGeometry(3.570,3.57,7.19 );
    cubeMaterial = new LambertMaterial({ color: 52193231  });
    cube = new Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.position.x = -4;
    cube.position.y = 18;
    cube.position.z = 6.95;
    scene.add(cube);
    console.log("Added left arm  to scene...");
    
    // Add right arm to the scene
   cubeGeometry = new BoxGeometry(3.570,3.57,7.19);
    cubeMaterial = new LambertMaterial({ color: 52193231 });
    cube = new Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.position.x = -4;
    cube.position.y = 18;
    cube.position.z = -6.95;
   scene.add(cube);
   console.log("Added right arm  to scene...");
    
    // Add left leg to the scene
   cubeGeometry = new BoxGeometry(3.57,12.51,3.57);
  cubeMaterial = new LambertMaterial({ color: 77231228 });
    cube = new Mesh(cubeGeometry, cubeMaterial);
   cube.castShadow = true;
    cube.position.x = -4;
    cube.position.y = 6;
    cube.position.z = 2;
    scene.add(cube);
    console.log("Added left leg  to scene...");
    
    // Add right leg to the scene
  cubeGeometry = new BoxGeometry(3.570,12.510,3.570);
    cubeMaterial = new LambertMaterial({ color: 77231228 });
    cube = new Mesh(cubeGeometry, cubeMaterial);
   cube.castShadow = true;
    cube.position.x = -4;
    cube.position.y = 6;
   cube.position.z = -2;
    scene.add(cube);
   console.log("Added right leg  to scene...");
    
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(-300, 150, 100);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added Spot Light to Scene");
    document.body.appendChild(renderer.domElement);
    renderer.render(scene, camera);
    
    //add controls
    gui= new GUI();
    control= new control(0.02,0.03);
    addControl(control);
}
// Setup default renderer
function setupRenderer() {
    renderer = new Renderer();
    renderer.setClearColor(0xEEEEEE, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    console.log("Finished setting up Renderer...");
}
// Setup main camera for the scene
function setupCamera() {
    camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = -50;
    camera.position.y = 20;
    camera.position.z = 0;
    camera.lookAt(scene.position);
    console.log("Finished setting up Camera...");
}

function addControl (controlObject){
    gui.add(controlObject, 'rotationSpeed',0,0.5);
    
}
function gameLoop() {
    stats.update();
    //animate cube
    cube.rotation.x += control.rotationSpeed;
    cube.rotation.y += control.rotationSpeed;
    cube.rotation.z += control.rotationSpeed;
    
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
    // render the scene
    renderer.render(scene, camera);
}
// Setup default renderer

//# sourceMappingURL=game.js.map