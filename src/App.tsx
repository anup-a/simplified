import React from "react";
import { Viewer } from "./components/Viewer";
import Customizer from "./components/Customizer";

const App: React.FC = () => {
  return (
    <>
      <nav className="h-8 mb-8 bg-slate-800 text-white flex items-center"></nav>
      <div className="flex flex-col md:flex-row w-3/4 justify-center mx-auto gap-8">
        <Viewer />
        <Customizer />
      </div>
    </>
  );
};

export default App;
