import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import scene from "../assets/3d/sky.glb";

const Sky = ({ isRotating }) => {
  const skyRef = useRef();
  const { nodes, materials } = useGLTF(scene);

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.z += 0.1 * delta;
    }
  });

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Sphere__0.geometry}
      material={materials["Scene_-_Root"]}
      rotation={[-Math.PI / 2, 0, 0.1]}
      scale={5}
      ref={skyRef}
    />
  );
};

export default Sky;
