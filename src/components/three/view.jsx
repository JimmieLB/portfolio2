import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { useRef, useEffect, useState } from 'react';
import Functions from './tween';
// import * as Functions from 'js-easing-functions'

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x2A2B2A );
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const raycaster = new THREE.Raycaster();
// const mouse = new THREE.Vector2();
const meshes = [];
const animLoop = 75;

const loader = new FontLoader();
// const animate = false;
let a = 0;
const str = 'JimmiE';

// function bounce() {

// }

function View() {
  const renderer = useRef(new THREE.WebGLRenderer({ alpha: true }));
  // renderer.setClearColor( 0x000000, 0 );
  // const renderer = useRef(new CSS3DRenderer());
  const canvas = useRef();
  // const meshes = useRef({});
  // const controls = useRef({});
  // const [dev, setDev] = useState('');
  // const [frame, setFrame] = useState(0);

  // const mouseMove = (e) => {

  // }


  const animate = () => {
    requestAnimationFrame(animate);

    if (a % 100 === 0) {
      let p = camera.position;
      // setDev(`x: ${p.x}, y: ${p.y}, z: ${p.z}`);
    }

    const yDiff = a % animLoop;
    const index = Math.floor(a % (animLoop * meshes.length) / (animLoop));
    let current = meshes[index];
    if (current?.position){

      // current.rotation.y = Math.PI * 8 / animLoop/2 * (animLoop / 2 * Functions.easeInOutQuint(2 / animLoop * (animLoop / 2 - Math.abs(yDiff - animLoop / 2))));
      current.rotation.x = (Math.PI * 2 / animLoop) * Functions.easeInOutCubic(yDiff/animLoop) * animLoop;
      // console.log(Functions.easeInOutQuint(yDiff/animLoop))
      if ((a + 1) % animLoop === 0) {
        current.rotation.x = 0;
      }
    }

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

      renderer.current.setSize(window.innerWidth, window.innerHeight);
      canvas.current.appendChild(renderer.current.domElement);
      renderer.current.domElement.style.width = "100%";
      renderer.current.domElement.style.height = "100%";

      const path = '/public/fonts/font4.json'
      let width = 0;
      const space = 10;
      const light = new THREE.AmbientLight(0xffffff, 2, 1);

      const cylinderGeometry = new THREE.CylinderGeometry( 400, 400, 10, 32 );
      const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff} );
      const m = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
      // scene.add(m);

      for (let i = 0; i < str.length; i++) {
        loader.load(path, function (font) {
          const geometry = new TextGeometry(str[i], {
            font: font,
            size: 100,
            height: 25,
            curveSegments: 1,
            bevelEnabled: false,
            bevelThickness: 5,
            bevelSize: 15,
            bevelOffset: 0,
            bevelSegments: 10
          });
          geometry.center();
          const mat = new THREE.MeshNormalMaterial();
          // mat.displacementScale(20)
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
          light.position.set(width/2, y, z + 50);

          camera.lookAt(new THREE.Vector3(width / 2, y, z));
          // light.lookAt(new THREE.Vector3(width/2, y, z));
          m.position.x = width/2;
          m.position.y = y/2;
        });
      }
      m.position.z = -150;
      m.rotation.x = Math.PI/2;

      light.position.set(camera.position.x, camera.position.y, camera.position.z)
      scene.add(light);


      animate();
      resize();
      window.addEventListener('resize', resize);
    }
  }, []);

  return (
    <div className='relative w-[100%] h-[100vh]'>
      <div className='absolute w-[100%] top-[50%] translate-y-[-50%]'>
        <div className='w-[100%] h-[500px] m-auto bg-primary' ref={canvas}></div>
        <div className = 'absolute top-[5%] left-[25%] text-3xl'>Hi,<br/>my name is</div>

        <div className='absolute bottom-[5%] left-[25%] text-3xl'><span className='text-accent text-5xl'>full-stack</span> web developer<br/>making stuff since 2017.</div>
        {/* <div className=''>{dev}</div> */}
      </div>
    </div>
  );
}

export default View;