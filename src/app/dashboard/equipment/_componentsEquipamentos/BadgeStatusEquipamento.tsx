import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { PowerIcon, PowerOff } from "lucide-react";

// Exemplo rápido de um Badge específico para Equipamentos
export function BadgeStatusEquipamento({ status }: { status: boolean }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "gap-1.5 px-2.5 py-0.5 border",
        status
          ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
          : "text-slate-500 bg-slate-500/10 border-slate-500/20",
      )}
    >
      {status ? <PowerIcon size={14} /> : <PowerOff size={14} />}
      <span className="text-[10px] uppercase font-bold tracking-wider">
        {status ? "Ativo" : "Desativado"}
      </span>
    </Badge>
  );
}
