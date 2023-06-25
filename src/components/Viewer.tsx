import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Canvas, Vector3 } from "@react-three/fiber";
import Model from "./Model";
import useModelStore from "../store";
import { useEffect, useState } from "react";
import Backdrop from "./Backdrop";

export const Viewer = ({ fov = 25 }) => {
  const model = useModelStore((state) => state.selectedModel);
  const [cameraPosition, setCameraPosition] = useState<Vector3>();

  useEffect(() => setCameraPosition(model.position), [model.position]);

  return (
    <div
      className="w-full mx-auto rounded-md bg-slate-200"
      style={{ height: "600px", maxHeight: "100vh" }}
    >
      <Canvas
        shadows
        camera={{ position: cameraPosition, fov }}
        gl={{ preserveDrawingBuffer: true }}
        eventPrefix="client"
        className="w-full"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <Center>
          <Backdrop />
          <Model model={model} />
          <OrbitControls
            maxPolarAngle={(Math.PI * 3) / 4}
            minPolarAngle={Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minAzimuthAngle={-Math.PI / 4}
          />
        </Center>
      </Canvas>
    </div>
  );
};
