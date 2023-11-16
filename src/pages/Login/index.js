import React from "react";
import { FaEyeSlash } from "react-icons/fa";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.jpeg"

export default function Login() {
  return (
    <div className="w-screen h-screen bg-[#8A2BE2] items-center flex flex-col">
      <div className="w-full flex justify-center items-start">
        <img src={logo} alt="logo" width={500} />
      </div>
      <main className="w-[70vh] h-[40vh] bg-gray-200 rounded-xl shadow-md shadow-black p-10 flex flex-col mt-24 gap-5 ">
        <h1 className="text-3xl font-semibold">Login</h1>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            className="w-full h-10 rounded-lg pl-2 outline-none"
            placeholder="Informe seu RA"
          />
          <span className="flex w-full h-10 bg-white items-center justify-center rounded-lg px-2">
            <input
              type="password"
              className="w-full outline-none"
              placeholder="Digite sua senha"
            />
            <FaEyeSlash size={25} />
          </span>
          <Link
            to="/ponto"
            className="w-full text-center p-2 text-lg rounded-xl text-white bg-[#8A2BE2]"
          >
            Acessar
          </Link>
        </div>
      </main>
    </div>
  );
}
