import React from "react";

//Link
import { Link } from "react-router-dom";

//assets
import logo from "../../assets/logo.jpeg"
export default function Header() {
  return (
    <div className="w-full flex bg-[#8A2BE2] justify-between items-center px-5">
      <Link
        to="/"
        className="w-[150px] truncate h-10 flex justify-center items-center bg-violet-300 text-xl rounded-lg"
      >
        Voltar ao Inicio
      </Link>
      <img src={logo} alt="logo" width={300} />
      <span className="w-[100px]" />
    </div>
  );
}
