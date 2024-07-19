import React from "react";
function Navbar() {
  const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  const uid = capitalizeFirstLetter(localStorage.getItem("userid"));
  const finalUsername = uid ? uid :"GuestNew";

  return (
    <div>
      <div
        id="navbar"
        className="w-full p-3 flex flex-col md:flex-row md:justify-between items-center "
      >
        <div className="w-full mb-2 md:mb-0">
          <input
            type="search"
            placeholder="Search your notes"
            className="w-full md:w-72 p-1 text-sm font-light bg-gray-100 border rounded-md border-gray-300 shadow-sm shadow-gray-100"
          />
        </div>
        <div className="w-full flex justify-between md:w-auto md:ml-auto mt-2 md:mt-0 md:flex md:items-center">
          <div
            id="user"
            className="flex items-center text-gray-700 bg-green-400 p-2 border rounded-lg md:mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
              />
            </svg>
            <span className="ml-2">{finalUsername}</span>
          </div>
          <button
            onClick={() => console.log("dark mode")}
            className="bg-green-400 rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.058 20q-3.334 0-5.667-2.333T4.058 12q0-3.039 1.98-5.27t4.904-2.634q.081 0 .159.006t.153.017q-.506.706-.801 1.57T10.158 7.5q0 2.667 1.866 4.533t4.534 1.867q.951 0 1.813-.295t1.548-.801q.012.075.017.153t.006.159q-.384 2.923-2.615 4.903T12.057 20m0-1q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.074 0-5.237-2.162T9.158 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5.058 12q0 2.9 2.05 4.95t4.95 2.05m-.25-6.75"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
