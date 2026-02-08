"use client";
import { useState } from "react";
import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import { CardDashboard } from "@/src/app/dashboard/_componentsDashboard/CardDashboard";
import SectionPreventivas from "@/src/app/dashboard/_componentsDashboard/SectionDashboardPreventivas";
import SectionAtividades from "@/src/app/dashboard/_componentsDashboard/SectionDashboardAtividades";
import { CategoriaProps } from "../lib/type";

export default function Dashboard() {
  const [filterDashboard, setFiltroEspecialidade] =
    useState<CategoriaProps>("Todos");

  console.log(filterDashboard);
  return (
    <main className={` w-full min-h-screen  pr-4  pl-8 max-sm:px-4 `}>
      <HeaderDashboard
        titulo="Dashboard"
        subTitulo="Visão geral das operações de manutenção"
      />
      <CardDashboard />
   
     <section className="mt-6 max-sm:mt-2 grid grid-cols-4 gap-4 max-sm:gap-2 mb-20 items-start max-sm:flex max-sm:flex-col-reverse">
  
  {/* No desktop col-span-3, no mobile fica em cima por causa do flex-col-reverse */}
  <div className="col-span-2 w-full">
    <SectionPreventivas />
  </div>

  {/* No desktop col-span-2, no mobile fica embaixo por causa do flex-col-reverse */}
  <div className="col-span-2 w-full">
    <SectionAtividades />
  </div>

</section>
    </main>
  );
}
