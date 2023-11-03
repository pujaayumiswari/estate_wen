import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Spline } from 'spline';

function ThreeDCard() {
  const containerRef = useRef();

  useEffect(() => {
    // Inisialisasi scene, kamera, dan renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Buat spline path
    const spline = new Spline();
    spline.add(0, 0, 0);
    spline.add(1, 1, -1);
    spline.add(2, 0, 0);

    // Buat kartu 3D
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const card = new THREE.Mesh(geometry, material);
    scene.add(card);

    // Animasi kartu mengikuti spline path
    const clock = new THREE.Clock();
    const speed = 0.2;
    const up = new THREE.Vector3(0, 1, 0);
    const lookAt = new THREE.Vector3();
    const position = new THREE.Vector3();
    const tangent = new THREE.Vector3();
    const target = new THREE.Vector3();
    const binormal = new THREE.Vector3();

    const animate = () => {
      const time = clock.getElapsedTime() * speed;
      spline.getPointAt(time, position);
      spline.getTangentAt(time, tangent);
      lookAt.copy(position).add(tangent);
      target.copy(position).add(tangent);
      binormal.crossVectors(up, tangent).normalize();
      camera.position.copy(position);
      camera.up.copy(up);
      camera.lookAt(lookAt);
      renderer.render(scene, camera);

      requestAnimationFrame(animate);
    };

    animate();

   
    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    return () => {
      window.removeEventListener('resize');
    };
  }, []);

  return <div ref={containerRef} />;
}

export default ThreeDCard;
