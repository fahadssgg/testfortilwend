// import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-fahad-color flex text-white flex-col	justify-center items-center text-center max-md:flex-col-reverse max-sm:flex-col  h-screen">
        <div className="flex gap-10 max-sm:flex-col max-sm:gap-2 ">
          {/* <a href="https://vitejs.dev" className=" " target="_blank">
            <img
              src={viteLogo}
              className="w-24 sha  hover:animate-ping"
              alt="Vite logo"
            />
          </a> */}
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="w-24 animate-react-logo"
              alt="React logo"
            />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="">
          {/* <button
            className="bg-cyan-500/45 px-4 py-1 font-bold rounded-lg outline outline-1 hover:outline-4 my-8 outline-red-500 max-sm:outline-blue-500 "
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button> */}
          <p>
            Edit <code>src</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
