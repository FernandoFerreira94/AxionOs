"use client";
// 1. Importar useState
import { Card, CardContent } from "@/components/ui/card";
import { color } from "@/src/app/styles/color";

import { Funnel } from "lucide-react";

import { FIlterStatus } from "./FilterStatus";
import { FilterCategoria } from "./FilterCategoria";
import { FilterTypeService } from "./FilterTypeService";

export default function CardServiceOrdenFilter() {
  return (
    <Card className={`border-gray-400/40 ${color.textSecondary}`}>
      <CardContent className="">
        <div className="flex gap-2 items-center mb-4">
          <Funnel size={16} /> Filter
        </div>
        <div className="grid grid-cols-3 gap-6">
          <FIlterStatus />
          <FilterCategoria />
          <FilterTypeService />
        </div>
      </CardContent>
    </Card>
  );
}
