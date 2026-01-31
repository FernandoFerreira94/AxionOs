"use client";
import { useState } from "react";
import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import { CardDashboard } from "@/src/app/dashboard/_componentsDashboard/CardDashboard";
import SectionPreventivas from "@/src/app/dashboard/_componentsDashboard/SectionDashboardPreventivas";
import SectionAtividades from "@/src/app/dashboard/_componentsDashboard/SectionDashboardAtividades";
import { FilterDashboardPreventivas } from "./_componentsDashboard/FilterDashboardPreventivas";
import { CategoriaProps } from "../lib/type";

export default function Dashboard() {
  const [filterDashboard, setFiltroEspecialidade] =
    useState<CategoriaProps>("Todos");

  console.log(filterDashboard);
  return (
    <main className={` w-full min-h-screen  pr-4  pl-8`}>
      <HeaderDashboard
        titulo="Dashboard"
        subTitulo="Visão geral das operações de manutenção"
      />
      <CardDashboard />
      <FilterDashboardPreventivas
        value={filterDashboard}
        onChange={setFiltroEspecialidade}
      />
      <section className="mt-6 grid grid-cols-5 gap-4 mb-20">
        <div className="col-span-3">
          <SectionPreventivas />
        </div>

        <div className="col-span-2">
          <SectionAtividades />
        </div>
      </section>
    </main>
  );
}
