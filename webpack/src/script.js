import './style.css';
import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Objects
// const group = new THREE.Group();
// group.position.y = 1; // change all objects in the group
// scene.add(group);

// const cube1 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial({ color: 0xff000 })
// );

// group.add(cube1);

// const cube2 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// );

// cube2.position.x = -2;
// group.add(cube2);

// const cube3 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial({ color: 0x0000ff })
// );

// cube3.position.x = 2;
// group.add(cube3);

// Add an Axehelper for better 3D modeling
const axesHelper = new THREE.AxesHelper(2); // parameter is the size of the helper
scene.add(axesHelper);

// Create a red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: '#a08f68' });
const mesh = new THREE.Mesh(geometry, material);

// Give the Mesh a starting position
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;

// You can set the starting position with set
// mesh.position.set(0.7, -0.6, 1);

// Scale the cube to better format
// mesh.scale.set(2, 0.5, 0.5);

// Rotate the cube
// mesh.rotation.reorder('YXZ'); // First reorder and then rotate
// mesh.rotation.y = Math.PI; // PI!!

scene.add(mesh);

// Sizes for aspect ratio
const sizes = {
    width: 800,
    height: 600,
};

// Initialize the Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// camera.lookAt(mesh.position);

// Create renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

// Start with the animation
const tick = () => 
{
    // Update objects
    // mesh.position.x -= 0.01;
    mesh.rotation.y -= 0.01;

    // Render the scene
    renderer.render(scene, camera);


    window.requestAnimationFrame(tick);
}

tick();