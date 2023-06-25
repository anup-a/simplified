import { useState } from "react";
import { reader } from "../helpers";
import useModelStore from "../store";
import { ColorPicker } from "./ColorPicker";
import FilePicker from "./FilePicker";
import ModelPicker from "./ModelPicker";

const Customizer = () => {
  const [file, setFile] = useState<File>();
  const changeOverlayImage = useModelStore((state) => state.changeOverlayImage);

  const readFile = () => {
    file &&
      reader(file).then((result) => {
        handleDecals(result as string);
      });
  };

  const handleDecals = (result: string) => {
    changeOverlayImage(result);
  };

  return (
    <div className="mx-auto min-w-[300px] w-[300px] flex flex-col gap-y-8 border rounded-md  p-8">
      <ModelPicker />
      <FilePicker file={file} setFile={setFile} readFile={readFile} />
      <ColorPicker />
    </div>
  );
};

export default Customizer;
