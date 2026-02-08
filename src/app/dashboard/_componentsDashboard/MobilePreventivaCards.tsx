import { Card, CardContent } from "@/components/ui/card";
import { color } from "@/src/app/styles/color";
import { Timer, MapPin, Wrench, Calendar } from "lucide-react";
import { formatarData } from "@/src/app/actions/formatarData";
import { calcularDiasAtraso } from "@/src/app/actions/calcularDiasAtraso";
import { BadgeFuncao } from "@/components/layoute/BadgeFuncao";
import { BadgePrioridade } from "@/components/layoute/BadgePrioridade";

interface Preventiva {
  equipamento: string;
  local: string;
  tipo: "Eletrica" | "Refrigeração";
  dataExecucao: Date;
  prioridade: "Alta" | "Media" | "Baixa";
}

export function MobilePreventivaCards({ item }: { item: Preventiva }) {
  const diasAtraso = calcularDiasAtraso(item.dataExecucao);
  
  // Lógica de cor do atraso igual à sua tabela
  const corAtraso = diasAtraso <= 2 
    ? color.textIconVerde 
    : diasAtraso <= 5 
      ? color.textIconAmarelo 
      : color.textIconVermelho;

  return (
    <Card className="border-gray-400/20  mb-3 max-sm:mb-0 overflow-hidden border-l-4" 
          style={{ borderLeftColor: diasAtraso > 5 ? '#ef4444' : diasAtraso > 2 ? '#eab308' : '#22c55e' }}>
      <CardContent className="px-4">
        {/* Topo: Equipamento e Dias de Atraso */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-col">
            <h3 className={`font-bold text-sm ${color.textBranco} leading-tight`}>
              {item.equipamento}
            </h3>
            <span className="text-[10px] text-slate-500 flex items-center gap-1 mt-1">
              <MapPin size={10} /> {item.local}
            </span>
          </div>
          <div className={`flex items-center gap-1 font-bold text-xs ${corAtraso} bg-black/20 px-2 py-1 rounded-full border border-white/5`}>
            <Timer size={14} />
            {diasAtraso}d
          </div>
        </div>

        {/* Meio: Badges e Info */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col gap-2">
            <span className="text-[9px] text-slate-500 uppercase font-bold tracking-tighter">Setor / Prioridade</span>
            <div className="flex gap-2">
              <BadgeFuncao funcao={item.tipo} />
              <BadgePrioridade prioridade={item.prioridade} />
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
             <span className="text-[9px] text-slate-500 uppercase font-bold tracking-tighter">Vencimento</span>
             <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                <Calendar size={12} className="text-slate-500" />
                {formatarData(item.dataExecucao)}
             </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}