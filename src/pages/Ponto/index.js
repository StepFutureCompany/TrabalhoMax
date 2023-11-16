import React, { useState } from "react";

import Header from "../../components/Header";

import { FaCheck } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";


import moment from "moment";
import { Link } from "react-router-dom";

const mStatus = [
  {
    icon: <IoMdCloseCircleOutline />,
    dia: "16/11/2023",
    entrada: "6:03:29 PM",
  },
  {
    icon: <IoMdCloseCircleOutline />,
    dia: "16/11/2023",
    entrada: "6:01:09 PM",
  },
  {
    icon: <IoMdCloseCircleOutline />,
    dia: "16/11/2023",
    entrada: "5:58:20 PM",
  },
  {
    icon: <IoMdCloseCircleOutline />,
    dia: "16/11/2023",
    entrada: "5:52:04 PM",
  },
  {
    icon: <IoMdCloseCircleOutline />,
    dia: "16/11/2023",
    entrada: "5:46:42 PM",
  },
  {
    icon: <IoMdCloseCircleOutline />,
    dia: "16/11/2023",
    entrada: "5:48:32 PM",
  },
  {
    icon: <IoMdCloseCircleOutline />,
    dia: "16/11/2023",
    entrada: "3:49:01 PM",
  },
  {
    icon: <IoMdCloseCircleOutline />,
    dia: "16/11/2023",
    entrada: "3:46:42 PM",
  },
  {
    icon: <IoMdCloseCircleOutline />,
    dia: "16/11/2023",
    entrada: "3:44:13 PM",
  },
  {
    icon: <IoMdCloseCircleOutline />,
    dia: "16/11/2023",
    entrada: "2:51:02 PM",
  },
  {
    icon: <IoMdCloseCircleOutline />,
    dia: "16/11/2023",
    entrada: "2:46:41 PM",
  },
  {
    icon: <IoMdCloseCircleOutline />,
    dia: "16/11/2023",
    entrada: "2:47:52 PM",
  },
];

export default function Ponto() {
  const [dateNow, setDateNow] = useState()
  return (
    <>
      <div className="w-screen h-screen bg-[#8A2BE2] items-center flex flex-col">
        <Header />
        <div className="w-[80%] rounded-xl flex gap-10 bg-violet-300 p-5 mt-10">
          <button onClick={() => setDateNow(false)}>Sair</button>
          <button onClick={() => setDateNow(true)}>Batida de Ponto</button>
          <Link to="/dados">Dados</Link>
        </div>
        <table className="w-[80%] h-[60%] mx-10 bg-gray-200 flex flex-col overflow-auto rounded-xl mt-10 ">
          <thead className="w-full flex bg-yellow-400 justify-between p-4 border-b-2 border-black text-lg sticky top-0">
            <th>Status</th>
            <th>Dia</th>
            <th>Entrada/Saida</th>
          </thead>
          {dateNow &&
          <div>
             <tbody
              className="w-full flex justify-between p-2 border-b cursor-pointer hover:bg-gray-100 border-black"
            >
              <tr className="w-full flex justify-start"><FaCheck /></tr>
              <tr className={`${dateNow ? "text-green-500" : ""} w-full flex justify-start`}>{moment().subtract(10, 'days').calendar()}</tr>
              <tr className={`${dateNow ? "text-green-500" : ""} w-full flex justify-start`}>{moment().format('LTS')}</tr>
            </tbody>
          </div>
          }
          {mStatus.map((item) => (
            <tbody
              key="i"
              className="w-full flex justify-between p-2 border-b cursor-pointer hover:bg-gray-100 border-black"
            >
              <tr className="w-full flex justify-start">{item.icon}</tr>
              <tr className="w-full flex justify-start">{item.dia}</tr>
              <tr className="w-full flex justify-start">{item.entrada}</tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
