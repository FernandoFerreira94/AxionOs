"use client";
import { useState } from "react";
import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { CardEquipamentos } from "./_componentsEquipamentos/CardEquipamentos";
import { FilterEquipamentos } from "./_componentsEquipamentos/FilterEquipamentos";
import TableEquipamentos from "./_componentsEquipamentos/TabelaEquipamentos";
import { FilterEquipamentosProps } from "@/src/app/lib/type";

export default function Equipamentos() {
  const [filterEquipamentos, setFilterEquipamentos] =
    useState<FilterEquipamentosProps>("Todos");

  console.log(filterEquipamentos);
  return (
    <main className="w-full min-h-screen flex flex-col px-8 max-sm:px-4 pb-4 overflow-hidden">
      <HeaderDashboard
        titulo="Equipamentos"
        subTitulo="Gestão e manutenção de equipamentos"
        component={
          <Button className="max-sm:w-full">
            <Plus /> Novo Equipamento
          </Button>
        }
      />
      <CardEquipamentos />
      <FilterEquipamentos
        value={filterEquipamentos}
        onChange={setFilterEquipamentos}
      />
      <TableEquipamentos />
    </main>
  );
}
