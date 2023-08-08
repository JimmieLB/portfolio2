import * as THREE from 'three';
import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { useRef, useEffect, useState } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TWEEN } from 'https://unpkg.com/three@0.139.0/examples/jsm/libs/tween.module.min.js';
import Functions from './tween';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const meshes = [];
const animLoop = 150;
// camera.position.set(215,60,155);
const loader = new FontLoader();
const animate = false;
let a = 0;
const str = 'Jimmie';

function rotateMesh(mesh, angle) {

}


function View() {
  const renderer = useRef(new THREE.WebGLRenderer());
  // const renderer = useRef(new CSS3DRenderer());
  const canvas = useRef<HTMLDivElement>();
  // const meshes = useRef({});
  const controls = useRef({});
  const [dev, setDev] = useState('');
  const [frame, setFrame] = useState(0);

  const mouseMove = (e) => {

  }


  const animate = () => {
    requestAnimationFrame(animate);

    // meshes.current.cube.rotation.x += 0.01;
    // meshes.current.cube.rotation.y += 0.01;
    // controls.current.update();
    // camera.position.set(0,0,a);
    if (a % 100 === 0) {
      let p = camera.position;
      setDev(`x: ${p.x}, y: ${p.y}, z: ${p.z}`);
    }
    // const time = 100;
    // const l = meshes.length;
    // if (a <= time * l && a % time === 0 && meshes[a/time]?.position) {
    //   console.log(a/time);
    //   new TWEEN.Tween(meshes[a/time].position)
    //   .to( { y:20}, time * l)
    //   .yoyo(true)
    //   .delay(l * time)
    //   .repeat(Infinity)
    //   .easing(TWEEN.Easing.Cubic.InOut)
    //   .start()
    //   ;
    // }
    const yDiff = a % animLoop;
    const index = Math.floor(a % (animLoop * meshes.length) / (animLoop));
    let current = meshes[index];
    if (current?.position){

      // current.position.y = (animLoop / 2 * Functions.easeInOutElastic(2 / animLoop * (animLoop / 2 - Math.abs(yDiff - animLoop / 2))));
      // console.log(current.position)
      // const tempX = current.position.x;
      // current.position.x = current.width*2;
      current.rotation.y = Math.PI * 4 / animLoop/2 * (animLoop / 2 * Functions.easeInOutElastic(2 / animLoop * (animLoop / 2 - Math.abs(yDiff - animLoop / 2))));
      // current.position.x = tempX;
    }

    // raycaster.setFromCamera();
    if (meshes[0]?.position) {
      a++;
    }
    renderer.current.render(scene, camera);
  }

  const resize = () => {
    // look up the size the canvas is being displayed
    if (canvas.current) {

      const width = canvas.current.offsetWidth;
      const height = canvas.current.offsetHeight;
      // adjust displayBuffer size to match
      if (renderer.current.domElement.width !== width || renderer.current.domElement.height !== height) {
        // you must pass false here or three.js sadly fights the browser
        renderer.current.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        // update any render target sizes here
      }
    }
  }

  useEffect(() => {
    if (canvas.current) {
      // controls.current = new OrbitControls( camera, renderer.current.domElement );

      renderer.current.setSize(window.innerWidth, window.innerHeight);
      canvas.current.appendChild(renderer.current.domElement);
      renderer.current.domElement.style.width = "100%";
      renderer.current.domElement.style.height = "100%";

      const path = '/public/fonts/font3.json'
      let width = 0;
      const space = 20;
      // let w = 0;
      // let h = 0;
      // let d = 0;

      // scene.add( new THREE.Mesh( new THREE.BoxGeometry(100,100,100,100), new THREE.MeshBasicMaterial({ color: 0xffffff})))

      for (let i = 0; i < str.length; i++) {
        loader.load(path, function (font) {
          const geometry = new TextGeometry(str[i], {
            font: font,
            size: 200,
            height: 15,
            curveSegments: 1,
            bevelEnabled: true,
            bevelThickness: 2,
            bevelSize: 1,
            bevelOffset: 0,
            bevelSegments: 5
          });
          geometry.center();
          const mat = new THREE.MeshNormalMaterial();
          const mesh = new THREE.Mesh(geometry, mat);

          scene.add(mesh);
          camera.lookAt(mesh.position);
          meshes.push(mesh);
          // setTimeout(() => {
          //   new TWEEN.Tween(mesh.position)
          //     .to( { y:20}, animLoop)
          //     .yoyo(true)
          //     .repeat(Infinity)
          //     .repeatDelay(animLoop * str.length/2 )
          //     .easing(TWEEN.Easing.Quadratic.InOut)
          //     .start();
          // }, animLoop * i);


          const bbox = new THREE.Box3().setFromObject(mesh);

          const w = bbox.max.x - bbox.min.x;
          const h = bbox.max.y - bbox.min.y;
          const d = bbox.max.z - bbox.min.z;
          mesh.width = w;
          mesh.height = h;
          mesh.depth = d;
          const x = w / 2;
          const y = h / 2;
          const z = d / 2;

          width += w + space;

          mesh.position.x += width - w/2;
          mesh.position.y += h/2;

          camera.position.set(width / 2, y, z + 150);

          camera.lookAt(new THREE.Vector3(width / 2, y, z));

        });
      }

      const light = new THREE.PointLight(0xffffff, 1000, 1000);
      light.position.set(20, 20, 20)
      scene.add(light);


      animate();
      resize();
      window.addEventListener('resize', resize);

      // loader.load('/public/fonts/font3.json', function (font) {

      //   const geometry = new TextGeometry( 'Jimmie', {
      //     font: font,
      //     size: 200,
      //     height: 25,
      //     curveSegments: 1,
      //     bevelEnabled: false,
      //     bevelThickness: 2,
      //     bevelSize: 1,
      //     bevelOffset: 0,
      //     bevelSegments: 5
      //   });

      //   // const geometry = new THREE.BoxGeometry(1,1,1,1);

      //   const material = new THREE.MeshNormalMaterial( {} );
      //   meshes.current.cube = new THREE.Mesh( geometry, material );
      //   scene.add( meshes.current.cube );

      //   meshes.current.cube.position.x = 0;
      //   meshes.current.cube.position.y = 0;
      //   meshes.current.cube.position.z = 0;

      //   const bbox = new THREE.Box3().setFromObject(meshes.current.cube);

      //   let w = bbox.max.x - bbox.min.x;
      //   let h = bbox.max.y - bbox.min.y;
      //   let d = bbox.max.z - bbox.min.z;

      //   const x = meshes.current.cube.position.x + w/2;
      //   const y = meshes.current.cube.position.y + h/2;
      //   const z = meshes.current.cube.position.z + 50;
      //   const p = new THREE.Vector3(x, y, z);
      //   camera.position.set(x, y, z + 150);
      //   // pos.z += 1;
      //   camera.lookAt(p);
      //   animate();
      //   resize();
      // });
    }
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setFrame(frame + 1);
  //   }, 100);
  // },[frame])

  return (
    <>
      <div className='w-[100%] h-[350px] m-auto mt-8 bg-primary' ref={canvas} onMouseMove={mouseMove}></div>
      <div className=''>{dev}</div>
    </>
  );
}

export default View;