import React,{ useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/user/AuthContext";
import { PulseLoader,BarLoader,BeatLoader } from "react-spinners";
function Form() {

  //login form
  const PORT = process.env.REACT_APP_BACKEND_URL;
  
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ userid: "", password: "" });
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`${PORT}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: credentials.userid,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    // console.log(json);
    

    if (json.success) {
      localStorage.setItem("token", json.authToken);
      login({ id: credentials.userid });
      localStorage.setItem("userid", credentials.userid);
      toast.success("Logged in successfully");
      setTimeout(() => {
        navigate("/dashboard");
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
    <div className="w-full h-full">
      <ToastContainer />
      <form className="space-y-4 md:space-y-6"  onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Username
          </label>
          <input
            onChange={onChange}
            type="text"
            name="userid"
            id="userid"
            value={credentials.userid}
            className="bg-gray-50 border border-gray-600 text-gray-600 rounded-lg  block w-full p-2.5"
            placeholder="a-zA-z0-9"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900  "
          >
            Password
          </label>
          <input
            onChange={onChange}
            value={credentials.password}
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600"
            required
          />
        </div>

        <div className="w-full px-5">
          <button
          disabled={loading}
          
            type="submit"
            className="w-full border border-gray-500 px-6 text-gray-900 bg-green-300 hover:bg-green-400  font-medium rounded-lg text-sm  py-2.5 text-center"
          >
             {loading ? <PulseLoader size={11} color={"black"}/> : "Login"}
            
          </button>
          <Link to="/signup" className="ml-4 text-orange-400 font-semibold">
            Signup?
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Form;
