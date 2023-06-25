import { create } from "zustand";
import { SHIRT_MODEL_CONFIG } from "./config";
import { ModelSetting } from "./types";

interface ModelState {
  selectedModel: ModelSetting;
  changeSelectedModel: (model: ModelSetting) => void;
  overlayImage: string;
  changeOverlayImage: (image: string) => void;
}

const useModelStore = create<ModelState>()((set) => ({
  selectedModel: SHIRT_MODEL_CONFIG,
  changeSelectedModel: (model) => set(() => ({ selectedModel: model })),
  overlayImage: "/pika.png",
  changeOverlayImage: (image) => set(() => ({ overlayImage: image })),
}));
export default useModelStore;
