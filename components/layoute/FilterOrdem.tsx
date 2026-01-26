"use client";
import { color } from "@/src/app/styles/color";
import { Button } from "../ui/button";
import { useAppContext } from "@/src/context/useAppContext";
export function FilterOrdem() {
  const { filtroEspecialidade, setFiltroEspecialidade } = useAppContext();

  return (
    <section className=" mt-4">
      <p className={`text-sm ${color.textSecondary}`}>
        Filtrar por Especialidade
      </p>
      <div className="flex items-center gap-2 mt-2">
        <Button
          variant={filtroEspecialidade === "All" ? "default" : "outline"}
          onClick={() => setFiltroEspecialidade("All")}
        >
          Todos
        </Button>
        <Button
          variant={filtroEspecialidade === "Eletrico" ? "default" : "outline"}
          onClick={() => setFiltroEspecialidade("Eletrico")}
        >
          Elétrico
        </Button>
        <Button
          variant={
            filtroEspecialidade === "Refrigeração" ? "default" : "outline"
          }
          onClick={() => setFiltroEspecialidade("Refrigeração")}
        >
          Refrigeração
        </Button>
        <Button
          variant={filtroEspecialidade === "Civil" ? "default" : "outline"}
          onClick={() => setFiltroEspecialidade("Civil")}
        >
          Civil
        </Button>
      </div>
    </section>
  );
}
