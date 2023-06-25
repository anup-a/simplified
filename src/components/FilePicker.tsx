type Props = {
  file?: File;
  setFile: (file: File | undefined) => void;
  readFile: () => void;
};

const FilePicker = ({ file, setFile, readFile }: Props) => {
  return (
    <div className="filepicker-container">
      <p className="my-2 text-sm font-semibold">Select Image :</p>

      <div className="flex-1 flex flex-col">
        <label className="flex flex-col rounded-md border border-dashed w-full text-center py-8 cursor-pointer">
          <span className="text-sm">Drag and drop image here</span>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0])}
          />
        </label>
      </div>
      <p className="text-sm mt-4 truncate text-center">
        {file?.name ? "Selected: " + file?.name : "No file selected."}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          className="px-4 py-1 bg-black text-sm mx-auto text-white rounded-md"
          onClick={() => readFile()}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default FilePicker;
