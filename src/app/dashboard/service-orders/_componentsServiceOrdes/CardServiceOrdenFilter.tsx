"use client";
// 1. Importar useState
import { Card, CardContent } from "@/components/ui/card";
import { color } from "@/src/app/styles/color";

import { Funnel } from "lucide-react";

import { FIlterStatus } from "./FilterOrdemServiceStatus";
import { FilterCategoria } from "./FilterOrdemServiceCategoria";
import { FilterTypeService } from "./FilterordemServiceTypeService";
import { FilterOrdemService } from "../page";

interface CardServiceOrdenFilterProps {
  filters: FilterOrdemService;
  setFilters: React.Dispatch<React.SetStateAction<FilterOrdemService>>;
}

export default function CardServiceOrdenFilter({
  filters,
  setFilters,
}: CardServiceOrdenFilterProps) {
  return (
    <Card className={`border-gray-400/40 ${color.textSecondary}`}>
      <CardContent className="">
        <div className="flex gap-2 items-center mb-4">
          <Funnel size={16} /> Filter
        </div>
        <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1">
          <FIlterStatus
            value={filters.status}
           onChange={(val) =>
              setFilters((prev) => ({ ...prev, status: val }))
            }
            
          />
          <FilterCategoria
            value={filters.categoria}
            onChange={(val) =>
              setFilters((prev) => ({ ...prev, categoria: val }))
            }
          />
          <FilterTypeService
            value={filters.tipoServico}
            onChange={(val) =>
              setFilters((prev) => ({ ...prev, tipoServico: val }))
            }
          />
        </div>
      </CardContent>
    </Card>
  );
}
