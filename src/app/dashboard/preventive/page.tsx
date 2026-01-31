"use client";
import { useState } from "react";
import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import { CardPreventivas } from "./_componentesPreventive/CardInfoPreventivas";
import { FilterPreventivas } from "./_componentesPreventive/FilterPreventivas";
import SectionPreventivas from "./_componentesPreventive/tabelaPreventiva";
import { MensagemPrevintavas } from "./_componentesPreventive/MensagemPrevintavas";
import { FilterPreventivasProps } from "@/src/app/lib/type";

export default function Preventivas() {
  const [filterPreventivas, setFilterPreventivas] =
    useState<FilterPreventivasProps>("Todos");

  console.log(filterPreventivas);
  return (
    <main className="w-full h-screen flex flex-col px-8 pb-4 overflow-hidden">
      <HeaderDashboard
        titulo="Preventivas de equipamentos"
        subTitulo="Planos de manutenção programada e acompanhamento de execução"
      />
      <CardPreventivas />
      <FilterPreventivas
        value={filterPreventivas}
        onChange={setFilterPreventivas}
      />
      <SectionPreventivas />
      <MensagemPrevintavas />
    </main>
  );
}
