import { ModelSetting } from "./types";

export const SHIRT_MODEL_CONFIG: ModelSetting = {
  path: "/shirt_baked.glb",
  name: "T_Shirt_male",
  material: "lambert1",
  imagePath: "/tshirt-mockup.png",
  position: [0, 0, 2.5],
  decalScale: 0.15,
  decalPosition: [0, 0.04, 0.15],
  color: "#2CD3E1",
};

export const MUG_MODEL_CONFIG: ModelSetting = {
  path: "/Cappuccino_cup.glb",
  name: "Cup",
  material: "Ceramic",
  imagePath: "/cup-mock.webp",
  position: [0, 0.3, 1],
  decalScale: 0.05,
  decalPosition: [0.01, 0.05, 0.05],
  color: "#FFB84C",
};
