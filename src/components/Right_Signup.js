import React from "react";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";

import { useAuth } from "../context/user/AuthContext";
function Right_Signup() {
  const PORT = process.env.REACT_APP_BACKEND_URL;
  const { login } = useAuth();
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    userid: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const [alertShown, setAlertShown] = useState(false);
  const { userid, password } = credentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`${PORT}/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userid, password }),
    });
    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.authToken);
      // login({ id: userid }); // Set user data in context
      login({ id: json.userid });
      localStorage.setItem("userid", json.userid);
      toast.success("Signed up successfully");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.error(json.error);
    }
    setLoading(false);
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <ToastContainer />
      <div className=" h-screen flex justify-center items-center flex-col py-28">
        <div className="flex justify-center items-center">
          <svg
            className="h-20 w-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V299.6l-94.7 94.7c-8.2 8.2-14 18.5-16.8 29.7l-15 60.1c-2.3 9.4-1.8 19 1.4 27.8H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z" />
          </svg>
          <h1 className="text-3xl text-gray-600">
            <i>Note.me</i>
          </h1>
        </div>
        <div className="flex text-center flex-col">
          <div className="mt-5">
            <div className="w-full h-full">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="userid"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Enter your Username
                  </label>
                  <input
                    onChange={onChange}
                    type="text"
                    name="userid"
                    id="userid"
                    className="bg-gray-50 border border-gray-600 text-gray-600 rounded-lg  block w-full p-2.5"
                    placeholder="a-zA-Z0-9"
                    required
                    minLength={3}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900  "
                  >
                    Password (min 6 char)
                  </label>
                  <input
                    onChange={onChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    minLength={6}
                  />
                </div>
                <div>
                  <label
                    htmlFor="cpassword"
                    className="block mb-2 text-sm font-medium text-gray-900  "
                  >
                    Confirm Password
                  </label>
                  <input
                    onChange={onChange}
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <div className="w-full px-5">
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full border cursor-pointer border-gray-500 px-6 text-gray-900 bg-green-300 hover:bg-green-400 font-medium rounded-lg text-sm  py-2.5 text-center"
                  >
                    {loading ? (
                      <PulseLoader size={11} color={"black"} />
                    ) : (
                      "Signup"
                    )}
                  </button>

                  <Link to="/" className="ml-4 text-orange-400 font-semibold">
                    Login?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right_Signup;
