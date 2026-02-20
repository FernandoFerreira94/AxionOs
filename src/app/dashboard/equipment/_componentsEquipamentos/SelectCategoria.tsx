import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Cpu } from "lucide-react";

interface SelectCategoriaProps {
  value: string;
  onChange: (value: string) => void;
  titulo: string;
  Icon: React.ReactNode;
}
export function SelectCategoria({
  value,
  onChange,
  titulo,
  Icon,
}: SelectCategoriaProps) {
  return (
    <div className="grid gap-2 ">
      <Label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
        {Icon} {titulo}
      </Label>

      <Select required value={value} onValueChange={onChange}>
        <SelectTrigger className="bg-black/40 border-slate-700 text-sm w-full">
          <SelectValue placeholder="Selecione..." />
        </SelectTrigger>
        <SelectContent className=" border-slate-700 text-white z-99 w-full">
          <SelectItem value="eletrico">Elétrica</SelectItem>
          <SelectItem value="refrigeracao">Refrigeração</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
