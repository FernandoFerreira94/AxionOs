import { color } from "@/src/app/styles/color";
import { Button } from "@/components/ui/button";
import { CategoriaProps } from "../../lib/type";

interface Props {
  value: CategoriaProps;
  onChange: (value: CategoriaProps) => void;
}

export function FilterDashboardPreventivas({ value, onChange }: Props) {
  return (
    <section className=" mt-4">
      <p className={`text-sm ${color.textSecondary}`}>
        Filtrar por Especialidade
      </p>
      <div className="flex items-center gap-2 mt-2">
        <Button
          variant={value === "Todos" ? "default" : "outline"}
          onClick={() => onChange("Todos")}
        >
          Todos
        </Button>
        <Button
          variant={value === "Eletrica" ? "default" : "outline"}
          onClick={() => onChange("Eletrica")}
        >
          Elétrica
        </Button>
        <Button
          variant={value === "Refrigeração" ? "default" : "outline"}
          onClick={() => onChange("Refrigeração")}
        >
          Refrigeração
        </Button>
      </div>
    </section>
  );
}
