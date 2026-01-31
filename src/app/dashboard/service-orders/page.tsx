"use client";
import { useState } from "react";
import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CardServiceOrdenFilter from "./_componentsServiceOrdes/CardServiceOrdenFilter";
import { TabelaOrdemServico } from "./_componentsServiceOrdes/TabelaOrdemServico";
import {
  CategoriaProps,
  StatusProps,
  TipoServicoProps,
} from "@/src/app/lib/type";

export interface FilterOrdemService {
  status: StatusProps;
  categoria: CategoriaProps;
  tipoServico: TipoServicoProps;
}

export default function ServiceOrderm() {
  const [filterOrdemService, setFilterOrdemService] =
    useState<FilterOrdemService>({
      status: "Todos",
      categoria: "Todos",
      tipoServico: "Todos",
    });

  console.log(filterOrdemService);
  return (
    <main className={` w-full min-h-screen  px-8 `}>
      <HeaderDashboard
        titulo="Ordens de serviço"
        subTitulo="Gerenciar ordens de serviço de manutenção"
        component={
          <Button>
            <Plus /> Criar OS
          </Button>
        }
      />
      <CardServiceOrdenFilter
        filters={filterOrdemService}
        setFilters={setFilterOrdemService}
      />
      <TabelaOrdemServico />
    </main>
  );
}
