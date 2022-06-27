import './style.css';
import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: '#a08f68' });
const mesh = new THREE.Mesh(geometry, material);

// Give the Mesh a starting position
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;

// You can set the starting position with set
mesh.position.set(0.7, -0.6, 1);

scene.add(mesh);

// Add an Axehelper for better 3D modeling
const axesHelper = new THREE.AxesHelper(2); // parameter is the size of the helper
scene.add(axesHelper);

// Sizes for aspect ratio
const sizes = {
    width: 800,
    height: 600,
};

// Initialize the Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Create renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
