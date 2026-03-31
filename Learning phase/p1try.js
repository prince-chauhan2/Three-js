// 1. THE SCENE: The 3D world where things live

import * as THREE from 'three';

// 1. THE SCENE: The 3D world where things live
const scene = new THREE.Scene();
// ... the rest of your code stays exactly the sameconst scene = new THREE.Scene();

// 2. THE CAMERA: How we view the world
// PerspectiveCamera(Field of View, Aspect Ratio, Near Clipping, Far Clipping)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // Move the camera back so we can see the center

// 3. THE RENDERER: The engine that draws the pixels
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // Add the "canvas" to your HTML

// 4. THE OBJECT: Let's make a simple red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 5. THE ANIMATION LOOP: This runs 60 times per second
function animate() {
    requestAnimationFrame(animate);

    // Add some motion!
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
