"use client";
import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CardFilterMateriais from "./_componentsMateriais.tsx/CardFilterMaterias";
import { useState } from "react";
import { DepartamentoProps } from "@/src/app/lib/type";
import { TabelaMaterial } from "./_componentsMateriais.tsx/TabelaMaterial";

export interface FiltersMateriais {
  departamento: DepartamentoProps;
  categoria: string;
  busca: string;
}

export default function Materiais() {
  const [filters, setFilters] = useState<FiltersMateriais>({
    departamento: "Shopping Colinas", // Shop ou Torre
    categoria: "Elétrica", // Elétrica ou Refri
    busca: "", // Nome do material
  });

  console.log(filters);
  return (
    <main className={` w-full min-h-screen  pr-4  pl-8`}>
      <HeaderDashboard
        titulo="Materiais"
        subTitulo="Controle de estoque e materiais"
        component={
          <div className="flex items-center gap-4">
            <Button variant={"outline"}>
              <Plus /> Cadastrar Categoria
            </Button>
            <Button>
              <Plus /> Cadastrar Material
            </Button>
          </div>
        }
      />
      <CardFilterMateriais filters={filters} setFilters={setFilters} />
      <section className="mt-6 grid grid-cols-5 gap-4 mb-20">
        <div className="col-span-3">
          <TabelaMaterial />
        </div>
      </section>
    </main>
  );
}
