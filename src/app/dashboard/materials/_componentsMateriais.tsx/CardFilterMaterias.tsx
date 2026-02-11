"use client";
// 1. Importar useState
import { Card, CardContent } from "@/components/ui/card";
import { color } from "@/src/app/styles/color";

import { Funnel } from "lucide-react";
import { FilterDepartamento } from "./FilterDepartamento";
import { FilterCategoria } from "./FilterCategoria";
import { InputSerachMaterial } from "./InputSerachMaterial";
import { FiltersMateriais } from "../page";

interface CardFilterMateriaisProps {
  filters: FiltersMateriais;
  setFilters: React.Dispatch<React.SetStateAction<FiltersMateriais>>;
}
export default function CardFilterMateriais({
  filters,
  setFilters,
}: CardFilterMateriaisProps) {
  return (
    <Card
      className={`border-gray-400/40 ${color.textSecondary} max-sm:p-0 max-sm:bg-transparent max-sm:border-none`}
    >
      <CardContent className="pt-6 max-sm:px-0 max-sm:py-6">
        {" "}
        {/* Adicionei um padding top */}
        <div className="flex gap-2 items-center mb-4 max-sm:mb-4 text-sm font-bold uppercase tracking-wider">
          <Funnel size={16} /> Filtros de Busca
        </div>
        <div className="grid grid-cols-3 gap-6 max-sm:gap-4 items-center max-sm:grid-cols-1">
          <FilterDepartamento
            value={filters.departamento}
            onChange={(val) =>
              setFilters((prev) => ({ ...prev, departamento: val }))
            }
          />

          <FilterCategoria
            value={filters.categoria}
            onChange={(val) =>
              setFilters((prev) => ({ ...prev, categoria: val }))
            }
          />

          <InputSerachMaterial
            value={filters.busca}
            onChange={(val) => setFilters((prev) => ({ ...prev, busca: val }))}
          />
        </div>
      </CardContent>
    </Card>
  );
}
