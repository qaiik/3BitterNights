/*  This is the main Night 1 game logic, this is a very important script for mechanics.  */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({antialiasing: true, canvas: document.querySelector('.gamec')});
renderer.setSize(window.innerWidth, window.innerHeight);
// ^^^^^^^ 3d scene and renderer initiation

function animate() {
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}

animate();
//will add some sort of modular system so this doesn't get insanely cramped
//governs all animations, and time, any 3d rendering is governed by this
