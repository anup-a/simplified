import { getColors } from "../helpers";
import useModelStore from "../store";

export const ColorPicker = () => {
  const selectedModel = useModelStore((state) => state.selectedModel);
  const changeSelectedModel = useModelStore(
    (state) => state.changeSelectedModel
  );
  const handleColorChange = (color: string) => {
    changeSelectedModel({
      ...selectedModel,
      color,
    });
  };
  return (
    <div>
      <p className="my-2 text-sm font-semibold">Choose Color :</p>
      <div className="flex justify-evenly">
        {getColors().map((c) => (
          <div
            className={`rounded-lg w-10 h-10 cursor-pointer ${
              selectedModel.color === c
                ? "ring-2 ring-offset-1 ring-slate-600"
                : ""
            }`}
            key={c}
            style={{ backgroundColor: c }}
            onClick={() => handleColorChange(c)}
          ></div>
        ))}
      </div>{" "}
    </div>
  );
};
