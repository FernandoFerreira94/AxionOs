"use client";
import { color } from "@/src/app/styles/color";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/src/context/useAppContext";
export function FilterPreventivas() {
  const { filterPreventivas, setFilterPreventivas } = useAppContext();

  return (
    <section className=" mt-4">
      <p className={`text-sm ${color.textSecondary}`}>
        Filtrar por preventivas
      </p>
      <div className="flex items-center gap-2 mt-2">
        <Button
          variant={filterPreventivas === "All" ? "default" : "outline"}
          onClick={() => setFilterPreventivas("All")}
        >
          Todos
        </Button>
        <Button
          variant={filterPreventivas === "vencidas" ? "default" : "outline"}
          onClick={() => setFilterPreventivas("vencidas")}
        >
          Vencidas (3)
        </Button>
        <Button
          variant={filterPreventivas === "finalizadas" ? "default" : "outline"}
          onClick={() => setFilterPreventivas("finalizadas")}
        >
          Finalizadas (0){" "}
        </Button>
      </div>
    </section>
  );
}
