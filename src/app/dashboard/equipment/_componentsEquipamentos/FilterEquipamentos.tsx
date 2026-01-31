import { color } from "@/src/app/styles/color";
import { Button } from "@/components/ui/button";
import { FilterEquipamentosProps } from "@/src/app/lib/type";
interface Props {
  value: FilterEquipamentosProps;
  onChange: (value: FilterEquipamentosProps) => void;
}

export function FilterEquipamentos({ value, onChange }: Props) {
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
        <Button
          className={` ${color.bgButtonDisabled}  ${value === "Ativo" && "bg-[#38A566] hover:bg-[#38A566]"}`}
          onClick={() => onChange("Ativo")}
        >
          Ativos
        </Button>
        <Button
          className={` ${color.bgButtonDisabled} ${value === "Desativado" && "bg-[#D16163] hover:bg-[#D16163] "}`}
          onClick={() => onChange("Desativado")}
        >
          Desativados
        </Button>
      </div>
    </section>
  );
}
