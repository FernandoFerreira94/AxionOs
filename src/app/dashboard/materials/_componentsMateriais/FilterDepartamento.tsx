import { Label } from "@radix-ui/react-label";

import { DepartamentoProps } from "@/src/app/lib/type";

const statusOptions: DepartamentoProps[] = [
  "Shopping Colinas",
  "Green Tower",
  "Empreedimento",
] as const;

interface FilterDepartamentoProps {
  value: DepartamentoProps;
  onChange: (value: DepartamentoProps) => void;
}

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FilterDepartamento({
  value,
  onChange,
}: FilterDepartamentoProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-sm font-medium">Departamento</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecione o departamento" />
        </SelectTrigger>
        <SelectContent className="z-[100]">
          {" "}
          {/* Z-index alto aqui */}
          {statusOptions.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
