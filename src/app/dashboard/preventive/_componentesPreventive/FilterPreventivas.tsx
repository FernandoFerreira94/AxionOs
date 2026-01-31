import { color } from "@/src/app/styles/color";
import { Button } from "@/components/ui/button";
import { FilterPreventivasProps } from "@/src/app/lib/type";

interface Props {
  value: FilterPreventivasProps;
  onChange: (value: FilterPreventivasProps) => void;
}
export function FilterPreventivas({ value, onChange }: Props) {
  return (
    <section className=" mt-4">
      <p className={`text-sm ${color.textSecondary}`}>
        Filtrar por preventivas
      </p>
      <div className="flex items-center gap-2 mt-2">
        <Button
          variant={value === "Todos" ? "default" : "outline"}
          onClick={() => onChange("Todos")}
        >
          Todos
        </Button>
        <Button
          variant={value === "Vencidas" ? "default" : "outline"}
          onClick={() => onChange("Vencidas")}
        >
          Vencidas (3)
        </Button>
        <Button
          variant={value === "Finalizadas" ? "default" : "outline"}
          onClick={() => onChange("Finalizadas")}
        >
          Finalizadas (0){" "}
        </Button>
      </div>
    </section>
  );
}
