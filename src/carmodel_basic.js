import * as THREE from 'three';
export default function loadCar(primaryColor=0xff2800) {
  var torus = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.14, 12, 18),
    new THREE.MeshLambertMaterial({
      color: 0x000000
    }));

  torus.rotation.x = Math.PI / 2;
  torus.castShadow = true;
  torus.receiveShadow = true;
  const wheelContainer = new THREE.Object3D();
  wheelContainer.add(torus);

  var box = new THREE.Mesh(new THREE.BoxGeometry(0.702, 0.706, 2.03), new THREE.MeshPhongMaterial({
    color: primaryColor,
    flatShading: true
  }));
  box.rotation.y = Math.PI / 2;
  box.position.z = 0.7
  box.castShadow = true;
  box.receiveShadow = true;
  const chassisContainer = new THREE.Object3D();
  chassisContainer.add(box);

  return {wheelObject: wheelContainer, chassisObject: chassisContainer};
}