"use client";
import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { CardFuncionarios } from "./_componentsFuncionarios/CardFuncionarios";
import { useState } from "react";
import { CardFilterFuncionarios } from "./_componentsFuncionarios/CardFilterFuncionarios";
import { TabelaFuncionarios } from "./_componentsFuncionarios/TabelaFuncionarios";

export interface FilterFuncionariosProps {
  busca: string;
  ativos: boolean | string;
}

export default function Employees() {
  const [filters, setFilters] = useState<FilterFuncionariosProps>({
    busca: "",
    ativos: "Todos",
  });

  console.log(filters);
  return (
    <main className={` w-full min-h-screen  pr-4  pl-8`}>
      <HeaderDashboard
        titulo="Funcionarios"
        subTitulo="Gerenciar membros da equipe de manutenção"
        component={
          <div className="flex items-center gap-4">
            <Button variant={"default"}>
              <Plus /> Cadastrar Funcionario
            </Button>
          </div>
        }
      />

      <CardFuncionarios />
      <CardFilterFuncionarios filters={filters} setFilters={setFilters} />
      <section className="mt-6 grid grid-cols-1 h-full gap-4 mb-20">
        <TabelaFuncionarios />
      </section>
    </main>
  );
}
