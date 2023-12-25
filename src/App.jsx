import { useState } from "react";
import "./index.css";
import Navbar from "./assets/components/Navbar";
import TitleText from "./assets/components/TitleText";
import principal from "./assets/image/principal.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="bg-Linear overflow-hidden h-[100vh] ">
        <Navbar />
        <div className="relative flex ">
          <TitleText />
          <img
            src={principal}
            alt=""
            className="w-[50%]  absolute top-0 right-0  object-contain"
          />
        </div>
      </main>
    </>
  );
}

export default App;
