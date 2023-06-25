import { GLTF } from "three-stdlib";
import { Vector3 } from "@react-three/fiber";

export type ModelSetting = {
  path: string;
  name: string;
  color?: string;
  material: string;
  imagePath: string;
  position: Vector3;
  decalScale: number;
  decalPosition: Vector3;
};

export type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.MeshStandardMaterial;
  };
};
