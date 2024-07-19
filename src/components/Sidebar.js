import React from "react";
import logo from "../assets/img/Favicon.png";
import { useLocation, useNavigate,Link } from "react-router-dom";
import { useState } from "react";

function Sidebar({ showAddNote, setShowAddNote }) {
  const history = useNavigate();

  const navigate = useNavigate();

  const handleAddNoteClick = () => {
    setShowAddNote(true);
    navigate("/dashboard");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    history("/");
  };

  return (
    <>
      <div
        id="sidebar"
        className="w-16 md:w-24 h-full flex flex-col justify-between items-center p-2 md:p-4"
      >
        <div className="flex flex-col items-center">
          <img src={logo} className="w-10 h-10 md:w-12 md:h-12" />
        </div>
        <div className="flex-grow flex flex-col justify-center items-center">
          <ul className="space-y-3 md:space-y-4">
            {/* home button */}
            <li>
              <Link to="/dashboard">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-white"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M7.08.222a.6.6 0 0 1 .84 0l6.75 6.64a.6.6 0 0 1-.84.856L13 6.902V12.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5V6.902l-.83.816a.6.6 0 1 1-.84-.856zm.42 1.27L12 5.918V12h-2V8.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V12H3V5.918zM7 12h2V9H7z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
            {/* add note button */}
            <li>
              
              <a className="cursor-pointer" onClick={handleAddNoteClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center mb-2 md:mb-4">
          {/* handle logout */}
          <button onClick={handleLogout}>
            <a >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8 text-white"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
                />
              </svg>
            </a>
          </button>
          <button  className="flex justify-center mt-8">
          <Link to = "/aboutdev" className="cursor-pointer text-white ">
            
            About Dev
          </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
