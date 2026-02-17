import { Label } from "@/components/ui/label";

const statusOptions: string[] = [
  "Todos",
  "Elétrica",
  "Civil",
  "Refrigeração",
  "Hidraulica",
] as const;

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterProps } from "@/src/app/lib/type";

export function FilterCategoria({ value, onChange }: FilterProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-sm font-medium">Categoria</Label>
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
