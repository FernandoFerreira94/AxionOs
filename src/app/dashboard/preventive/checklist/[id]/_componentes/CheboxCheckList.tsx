import { RadioGroupItem } from "@/components/ui/radio-group";
import { RadioGroup } from "@/components/ui/radio-group";
import { CheckCircle2, Slash, XCircle } from "lucide-react";
import { Label } from "@/components/ui/label";

export function CheboxCheckList({
  id,
  pergunta,
}: {
  id: number;
  pergunta: string;
}) {
  return (
    <tr key={id} className="hover:bg-white/[0.02] transition-colors">
      <td className="px-6 py-4 text-sm text-slate-300">
        <span className="text-blue-500 font-mono mr-2">
          {String(id).padStart(2, "0")}
        </span>
        {pergunta}
      </td>
      <td className="px-6 py-4">
        <RadioGroup defaultValue="ok" className="flex justify-center gap-4">
          <div className="flex items-center space-x-1">
            <RadioGroupItem
              value="ok"
              id={`ok-${id}`}
              className="text-emerald-500 border-emerald-500/50"
            />
            <Label
              htmlFor={`ok-${id}`}
              className="text-[10px] font-bold text-emerald-500 cursor-pointer flex items-center gap-1"
            >
              <CheckCircle2 size={12} /> OK
            </Label>
          </div>
          <div className="flex items-center space-x-1">
            <RadioGroupItem
              value="nc"
              id={`nc-${id}`}
              className="text-red-500 border-red-500/50"
            />
            <Label
              htmlFor={`nc-${id}`}
              className="text-[10px] font-bold text-red-500 cursor-pointer flex items-center gap-1"
            >
              <XCircle size={12} /> NC
            </Label>
          </div>
          <div className="flex items-center space-x-1">
            <RadioGroupItem
              value="na"
              id={`na-${id}`}
              className="text-slate-500 border-slate-500/50"
            />
            <Label
              htmlFor={`na-${id}`}
              className="text-[10px] font-bold text-slate-500 cursor-pointer flex items-center gap-1"
            >
              <Slash size={12} /> N/A
            </Label>
          </div>
        </RadioGroup>
      </td>
    </tr>
  );
}
