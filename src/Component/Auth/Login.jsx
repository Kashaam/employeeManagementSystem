import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email: ", email)
    console.log("Password: ", password)

    setEmail("");
    setPassword('');
  };
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-2 border-blue-300 rounded-lg p-14">
        <form
          onSubmit={submitHandler}
          action=""
          className="flex flex-col gap-4 items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="text-sm font-semibold px-3 py-2 border-1 rounded-md outline-none bg-transparent placeholder:text-gray-400 placeholder:text-xs"
            type="email"
            placeholder="enter your email"
          />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
            required
            className="text-sm font-semibold px-3 py-2 border-1 rounded-md outline-none bg-transparent placeholder:text-gray-400 placeholder:text-xs"
            type="password"
            placeholder="enter your password"
          />
          <button className="px-3 py-1 cursor-pointer text-sm font-semibold text-blue-300 rounded-lg border-1 border-blue-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
