/// <reference path="_reference.ts"/>
//Nashia Amourdon
//Last modified:5/02/2016
//revision version:1.3
// MAIN GAME FILE

// THREEJS Aliases
import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import Geometry = THREE.Geometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Material = THREE.Material;
import Mesh = THREE.Mesh;
import Object3D = THREE.Object3D;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import Face3 = THREE.Face3;
import Point = objects.Point;
import CScreen = config.Screen;

//Custom Game Objects
import gameObject = objects.gameObject;

var scene: Scene;
var renderer: Renderer;
var camera: PerspectiveCamera;
var axes: AxisHelper;
var cube,body,head,rightArm,leftArm,rightleg,leftLeg: Mesh;
var plane: Mesh;
var sphere: Mesh;
var ambientLight: AmbientLight;
var spotLight: SpotLight;
var control: Control;
var gui: GUI;
var stats: Stats;
var step: number = 0;
var cubeGeometry:CubeGeometry;
var cubeMaterial:LambertMaterial;
var human;


function init() {
    // Instantiate a new Scene object
    scene = new Scene();

    setupRenderer(); // setup the default renderer
	
    setupCamera(); // setup the camera
	
    // add an axis helper to the scene
    axes = new AxisHelper(10);
    scene.add(axes);
    console.log("Added Axis Helper to scene...");
    
    //Add a Plane to the Scene
    plane = new gameObject(
        new PlaneGeometry(60, 40, 1, 1),
        new LambertMaterial({ color: 3323158 }),
        0, 0, 0);

    plane.rotation.x = -0.5 * Math.PI;

    scene.add(plane);
    console.log("Added Plane Primitive to scene...");
    
    //Add a Cube to the Scene
   cubeGeometry = new BoxGeometry(3.48, 4.48, 4.48);
    cubeMaterial = new LambertMaterial({ color: 102255204 });
    head = new Mesh(cubeGeometry, cubeMaterial);
    head.castShadow = true;
    //cube.receiveShadow = true;
    //cube.position.y = 1;
    head.position.x = -4;
    head.position.y = 21.5;
    head.position.z = 0;
    scene.add(head);
    //scene.add(cube);
    console.log("Added Cube Primitive to scene...");
    
    //Add the body to the scene
    cubeGeometry = new BoxGeometry(3.75, 7.99, 7.99);
    cubeMaterial = new LambertMaterial({ color: 0xff0000 });
        body = new Mesh(cubeGeometry, cubeMaterial);
    body.castShadow = true;
    body.position.x = -4;
    body.position.y = 16;
    body.position.z = 0;
    scene.add(body);
    console.log("Added Cube Primitive to scene...");
    
    // Add the left arm to the scene
    cubeGeometry = new BoxGeometry(3.570, 3.57, 7.19);
    cubeMaterial = new LambertMaterial({ color: 52193231 });
    leftArm = new Mesh(cubeGeometry, cubeMaterial);
    leftArm.castShadow = true;
    leftArm.position.x = -4;
    leftArm.position.y = 18;
    leftArm.position.z = 6.95;
    scene.add(leftArm);
    console.log("Added left arm  to scene...");
    
    // Add right arm to the scene
    cubeGeometry = new BoxGeometry(3.570, 3.57, 7.19);
    cubeMaterial = new LambertMaterial({ color: 52193231 });
    rightArm = new Mesh(cubeGeometry, cubeMaterial);
    rightArm.castShadow = true;
    rightArm.position.x = -4;
    rightArm.position.y = 18;
    rightArm.position.z = -6.95;
    scene.add(rightArm);
    console.log("Added right arm  to scene...");
    
    // Add left leg to the scene
    cubeGeometry = new BoxGeometry(3.57, 12.51, 3.57);
    cubeMaterial = new LambertMaterial({ color: 77231228 });
    leftLeg = new Mesh(cubeGeometry, cubeMaterial);
    leftLeg.castShadow = true;
    leftLeg.position.x = -4;
    leftLeg.position.y = 6;
    leftLeg.position.z = 2;
    scene.add(leftLeg);
    console.log("Added left leg  to scene...");
    
     // Add right leg to the scene
    cubeGeometry = new BoxGeometry(3.570, 12.510, 3.570);
    cubeMaterial = new LambertMaterial({ color: 77231228 });
    rightleg = new Mesh(cubeGeometry, cubeMaterial);
    rightleg.castShadow = true;
    rightleg.position.x = -4;
    rightleg.position.y = 6;
    rightleg.position.z = -2;
    scene.add(rightleg);
    console.log("Added right leg  to scene...");
    
    //assemble the human 
    human= new THREE.Object3D();
    human.add(body);
    human.add(head);
    human.add(leftArm);
    human.add(rightArm);
    human.add(leftLeg);
    human.add(rightleg);
    scene.add(human);
    console.log("Human assembled")
    
    
    // Add an AmbientLight to the scene
    ambientLight = new AmbientLight(0x090909);
    scene.add(ambientLight);
    console.log("Added an Ambient Light to Scene");
	
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(-40,60,-10);
    //spotLight.rotation.set(-0.8, 42.7, 19.5);
    spotLight.castShadow = true;
    scene.add(spotLight);
    
    console.log("Added a SpotLight Light to Scene");
    
    // add controls
    gui = new GUI();
    control = new Control(0,0,0);
    addControl(control);

    // Add framerate stats
    addStatsObject();
    console.log("Added Stats to scene...");

    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    
    window.addEventListener('resize', onResize, false);
}

function onResize(): void {
    camera.aspect = CScreen.RATIO;
    //camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
}

function addControl(controlObject: Control): void {
    gui.add(controlObject, 'rotationSpeedY',-0.5,0.5);
    gui.add(controlObject,'rotationSpeedX',-0.5,0.5);
    gui.add(controlObject,'rotationSpeedZ',-0.5,0.5);
    gui.add(controlObject,'generateColor');
}

function addStatsObject() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}

// Setup main game loop
function gameLoop(): void {
    stats.update();
    
    human.rotation.y += control.rotationSpeedY;
    human.rotation.x+=control.rotationSpeedX;
    human.rotation.z+=control.rotationSpeedZ;
    
    
   
    
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
	
    // render the scene
    renderer.render(scene, camera);
}

// Setup default renderer
function setupRenderer(): void {
    renderer = new Renderer();
    renderer.setClearColor(0xEEEEEE, 1.0);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}

// Setup main camera for the scene
function setupCamera(): void {
    camera = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = -70;
    camera.position.y = 20;
    camera.position.z = 0;
    camera.lookAt(scene.position);
    console.log("Finished setting up Camera...");
}
