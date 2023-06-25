import { MUG_MODEL_CONFIG, SHIRT_MODEL_CONFIG } from "../config";
import useModelStore from "../store";

const models = [MUG_MODEL_CONFIG, SHIRT_MODEL_CONFIG];

const ModelPicker = () => {
  const selectedModel = useModelStore((state) => state.selectedModel);
  const changeSelectedModel = useModelStore(
    (state) => state.changeSelectedModel
  );

  return (
    <div>
      <p className="my-2 text-sm font-semibold">Select Model :</p>
      <div className="flex gap-4 mt-4">
        {models.map((m) => (
          <div
            key={m.name}
            className={`w-1/2 border rounded-md text-black cursor-pointer ${
              selectedModel.name === m.name
                ? "ring-2 ring-slate-600 ring-offset-2"
                : ""
            }`}
            onClick={() => changeSelectedModel(m)}
          >
            <img src={m.imagePath} className=" h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelPicker;
