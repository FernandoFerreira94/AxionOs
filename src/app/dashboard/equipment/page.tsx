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
    <main className="w-full h-screen flex flex-col px-8 pb-4 overflow-hidden">
      <HeaderDashboard
        titulo="Equipamentos"
        subTitulo="Gestão e manutenção de equipamentos"
        component={
          <Button>
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
