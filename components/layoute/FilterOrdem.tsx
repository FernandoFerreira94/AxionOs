"use client";
import { color } from "@/src/app/styles/color";
import { Button } from "../ui/button";
import { useState } from "react";

export function FilterOrdem() {
  const [filterType, setFilterType] = useState("all");

  return (
    <section className=" mt-4">
      <p className={`text-sm ${color.textSecondary}`}>
        Filtrar por Especialidade
      </p>
      <div className="flex items-center gap-2 mt-2">
        <Button
          variant={filterType === "all" ? "default" : "outline"}
          onClick={() => setFilterType("all")}
        >
          Todos
        </Button>
        <Button
          variant={filterType === "eletrica" ? "default" : "outline"}
          onClick={() => setFilterType("eletrica")}
        >
          Elétrica
        </Button>
        <Button
          variant={filterType === "refrigeracao" ? "default" : "outline"}
          onClick={() => setFilterType("refrigeracao")}
        >
          Refrigeração
        </Button>
        <Button
          variant={filterType === "civil" ? "default" : "outline"}
          onClick={() => setFilterType("civil")}
        >
          Civil
        </Button>
      </div>
    </section>
  );
}
