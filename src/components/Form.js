import axios from "axios";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";

function Form() {
  //login form
  const history = useNavigate();
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   try{
  //     await axios.post("http://localhost:8000/",{
  //       userid,
  //       password,
  //     }).then(res=>{
  //       if(res.data === "exist"){
  //         toast.success("You LoggedIn Successfully!");
  //         history("/dashboard",{state:{id:userid}})
  //       }
  //       else if(res.data === "notexist"){
  //         toast.error("User not exists.");
  //         alert("Invalid Username or Password")
  //       }
  //     }).catch(e=>{
  //       toast.error("Error while logging in.");
  //       // alert("wrong details");
  //       console.log(e);
  //     })
  //   }
  //   catch(e){
  //     console.log(e);
  //   }
  // }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/", {
        userid,
        password,
      }).then(res => {
        if (res.data === "exist") {
          toast.success("You LoggedIn Successfully!", {
            autoClose:100,
            onClose: () => {
              setTimeout(() => {
                navigate("/dashboard", { state: { id: userid } });
              }, 0);
            }
          });
        } else if (res.data === "notexist") {
          toast.error("User not exists.",{
            autoClose:400
          });
          // alert("Invalid Username or Password");
        }
      }).catch(e => {
        toast.error("Error while logging in.");
        console.log(e);
      })
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="w-full h-full">
      <ToastContainer />
      <form class="space-y-4 md:space-y-6" action="POST" noValidate>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Username
          </label>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => setUserid(e.target.value)}
            class="bg-gray-50 border border-gray-600 text-gray-600 rounded-lg  block w-full p-2.5"
            placeholder="a-zA-z0-9"
            required=""
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900  "
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600   dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>

        <div className="w-full px-5">
          <Link
            onClick={handleSubmit}
            to="/dashboard"
            type="submit"
            class="w-full border border-gray-500 px-6 text-gray-900 bg-green-300 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm  py-2.5 text-center   dark:focus:ring-primary-800"
          >
            Login
          </Link>
          <a href="/signup" className="ml-4 text-orange-400 font-semibold">
            Signup?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Form;
