import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar page={"home"} />
      <body className="flex flex-col bg-gradient-to-b to-black via-gray-500 from-white content-center justify-center h-screen">
        <div
          className="h-auto w-auto flex content-center justify-center self-center
        App-logo2 rounded-full   bg-white p-2 mt-24"
        >
          <div
            className="h-auto w-auto flex content-center justify-center self-center
        App-logo2 rounded-full border-my-color border-2 bg-white"
          >
            <div
              className="h-80 w-80 flex content-center justify-center self-center
        App-logo rounded-full border-my-color border-2 bg-white"
            >
              <img src="logo.png" className="w-72 self-center " />
            </div>
          </div>
        </div>
        <div className="flex justify-center content-center mt-24">
          <h6 className="text-white font-semibold text-lg">
            comming soon!....
          </h6>
        </div>
      </body>
    </>
  );
}
