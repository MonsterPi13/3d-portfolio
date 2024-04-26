import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from "../assets/3d/programmer.glb";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";

const Programmer = ({ isRotating, ...props }) => {
  const programmerRef = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, programmerRef);

  useEffect(() => {
    if (!isRotating) {
      Object.values(actions).forEach((action) => action.stop());
    } else {
      actions["Animation"].play();
    }
  }, [isRotating]);

  return (
    <group ref={programmerRef} {...props}>
      <group name="root">
        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
          <group name="Armature003_33">
            <group name="GLTF_created_0">
              <primitive object={nodes.GLTF_created_0_rootJoint} />
              <skinnedMesh
                name="Object_7"
                geometry={nodes.Object_7.geometry}
                material={materials["1_shirt"]}
                skeleton={nodes.Object_7.skeleton}
              />
              <skinnedMesh
                name="Object_8"
                geometry={nodes.Object_8.geometry}
                material={materials["1_vest"]}
                skeleton={nodes.Object_8.skeleton}
              />
              <skinnedMesh
                name="Object_9"
                geometry={nodes.Object_9.geometry}
                material={materials.shared_generic}
                skeleton={nodes.Object_9.skeleton}
              />
              <skinnedMesh
                name="Object_10"
                geometry={nodes.Object_10.geometry}
                material={materials.shared_skin}
                skeleton={nodes.Object_10.skeleton}
              />
              <skinnedMesh
                name="Object_11"
                geometry={nodes.Object_11.geometry}
                material={materials["1_pants"]}
                skeleton={nodes.Object_11.skeleton}
              />
              <skinnedMesh
                name="Object_12"
                geometry={nodes.Object_12.geometry}
                material={materials["1_shoes"]}
                skeleton={nodes.Object_12.skeleton}
              />
              <skinnedMesh
                name="Object_13"
                geometry={nodes.Object_13.geometry}
                material={materials["1_bowtie"]}
                skeleton={nodes.Object_13.skeleton}
              />
              <skinnedMesh
                name="Object_14"
                geometry={nodes.Object_14.geometry}
                material={materials.shared_hair_brown}
                skeleton={nodes.Object_14.skeleton}
              />
              <skinnedMesh
                name="Object_15"
                geometry={nodes.Object_15.geometry}
                material={materials.shared_eye_black}
                skeleton={nodes.Object_15.skeleton}
              />
              <skinnedMesh
                name="Object_16"
                geometry={nodes.Object_16.geometry}
                material={materials.shared_eye_white}
                skeleton={nodes.Object_16.skeleton}
              />
              <group name="1_32" />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Programmer;
