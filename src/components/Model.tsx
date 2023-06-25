import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { Vector3, useFrame, useThree } from "@react-three/fiber";
import { GLTFResult, ModelSetting } from "../types";
import { useEffect } from "react";
import useModelStore from "../store";
import { easing } from "maath";

type Props = {
  model: ModelSetting;
};

const Model = ({ model, ...props }: Props) => {
  const overlayImage = useModelStore((state) => state.overlayImage);
  const texture = useTexture(overlayImage);
  const { nodes, materials } = useGLTF(model.path) as GLTFResult;

  const geometry = nodes[model.name].geometry;
  const material = materials[model.material];
  const { camera } = useThree();

  useEffect(() => {
    console.log(model.position);
    // @ts-ignore
    camera.position.set(...model.position);
  }, [model.position]);

  useFrame((_, delta) => {
    // change model color on input change
    if (model.color) {
      easing.dampC(material.color, model.color, 0.25, delta);
    }
  });

  return (
    <mesh
      castShadow
      geometry={geometry}
      material={material}
      material-roughness={1}
      {...props}
      dispose={null}
    >
      <Decal
        position={model.decalPosition as Vector3}
        rotation={[0, 0, 0]}
        scale={model.decalScale}
        map={texture}
        map-anisotropy={10}
        depthTest={false}
        depthWrite={true}
      />
    </mesh>
  );
};

export default Model;

useGLTF.preload("/shirt_baked.glb");
useGLTF.preload("/Cappuccino_cup.glb");
useTexture.preload("/depth.jpg");

// ["/react.png", "/three2.png", "/pmndrs.png"].forEach(useTexture.preload);
