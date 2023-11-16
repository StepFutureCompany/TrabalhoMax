import React from "react";
import InputText from "../../components/InputText";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function EmployeeData() {
  
  return (
    <>
      <section className="w-screen h-screen flex bg-[#8A2BE2] flex-col items-center gap-20 text-3xl">
        <Header />
        <div className="w-[70%] h-fit flex flex-col justify-center items-center rounded-xl p-5 bg-white">
          <h1 className="text-3xl font-semibold">Dados Do Funcionarios</h1>
          <article className="flex w-full h-fit p-10 gap-10 text-start">
            <aside className="w-full flex flex-col gap-2">
              <InputText title="Nome Completo" placeholder="Pedro Gabriel" disabled />
              <InputText title="Cargo" placeholder="Programador" disabled />
              <InputText title="Admissão" placeholder="16/11/2023" disabled />
            </aside>
            <aside className="w-full flex flex-col gap-2">
              <InputText title="Departamento" placeholder="Ti" disabled />
              <InputText title="Lotação" placeholder="01" disabled />
              <InputText title="Email" placeholder="Pedro@pedrogmail.com" disabled />
            </aside>
          </article>
            <InputText classTitle="!text-center !gap-5 bg-red-500 !text-lg" title="Observação" disabled />
            <span className="w-full text-lg flex justify-start px-10 mt-10">
            <Link className="p-3 w-32 flex justify-center rounded-xl bg-violet-300" to="/ponto">Voltar</Link>
            </span>
        </div>
      </section>
    </>
  );
}
