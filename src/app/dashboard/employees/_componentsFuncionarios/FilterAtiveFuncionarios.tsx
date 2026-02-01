import { color } from "@/src/app/styles/color";
import { Button } from "@/components/ui/button";
interface Props {
  value: string | boolean;
  onChange: (value: string | boolean) => void;
}

export function FilterAtivoFuncionarios({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-2 ">
      <Button
        variant={value === "Todos" ? "default" : "outline"}
        onClick={() => onChange("Todos")}
      >
        Todos
      </Button>

      <Button
        className={` ${color.bgButtonDisabled}   ${value === true && "bg-[#38A566] hover:bg-[#38A566]"}`}
        onClick={() => onChange(true)}
      >
        Ativos
      </Button>
      <Button
        className={` ${color.bgButtonDisabled}  ${value === false && "bg-neutral-600 hover:bg-neutral-700/40 "}`}
        onClick={() => onChange(false)}
      >
        Inativos
      </Button>
    </div>
  );
}
