import React from "react";
import { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail("")
    setPassword('')
  };
  return (
    <div>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="border-2 border-emerald-500 rounded-2xl">
          <form
            action=""
            className="flex flex-col justify-center p-16 "
            onSubmit={(e) => submitHandler(e)}
          >
            <input
            value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Enter your email . . ."
              className="border-2 border-emerald-500 p-3 m-4 text-xl
               outline-none rounded-2xl  bg-transparent"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-2 border-emerald-500 p-3 text-xl
               outline-none rounded-2xl m-4 bg-transparent"
              type="password"
              placeholder="Enter your password . . ."
            />
            <button
              className="border-2 border-none p-3
              placeholder:text-white  rounded-2xl text-xl bg-emerald-500 m-auto "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
