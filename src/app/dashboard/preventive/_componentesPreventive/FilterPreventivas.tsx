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
      <div className="flex items-center gap-2 mt-2 max-sm:grid max-sm:grid-cols-2 max-sm:gap-3 ">
        <Button
          variant={value === "Todos" ? "default" : "outline"}
          onClick={() => onChange("Todos")}
          className={`${value === "Todos" && `${color.bgButton} hover:${color.bgButton}`}`}
        >
          Todos
        </Button>
        <Button
          variant={value === "Vencidas" ? "default" : "outline"}
          onClick={() => onChange("Vencidas")}
          className={`${value === "Vencidas" && "bg-[#D16163] hover:bg-[#D16163]"}`}
        >
          Vencidas (3)
        </Button>
        <Button
          variant={value === "Finalizadas" ? "default" : "outline"}
          onClick={() => onChange("Finalizadas")}
          className={`${value === "Finalizadas" && "bg-[#38A566] hover:bg-[#38A566]"}`}
        >
          Finalizadas (0){" "}
        </Button>
      </div>
    </section>
  );
}
