import React from "react";
import leftLogo from "../assets/img/left_logo.jpg";

function Left() {
  return (
    <main>
      <div className="h-screen p-0 m-0 w-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
          <div id="left" className="col-span-1 lg:col-span-6">
            <div className="h-screen flex justify-center items-center flex-col py-28">
              <img
                src={leftLogo}
                alt="left img"
                className="h-60 w-60 rounded-md"
              />
              <div className="flex text-center flex-col">
                <h1 className="text-2xl">Keep life simple</h1>
                <span>
                  Store all your notes in a simple and intuitive app
                  <br />
                  that helps you enjoy what is most important
                  <br />
                  in life.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Left;
