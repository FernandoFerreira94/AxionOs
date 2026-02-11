import { Card, CardContent } from "@/components/ui/card";
import { User, Calendar, Hash, MoreHorizontal } from "lucide-react";
import { formatarData } from "@/src/app/actions/formatarData";
import { BadgeTipoServico } from "@/components/layoute/BadgeTipoServico";
import { BadgeStatus } from "@/components/layoute/BadgeStatus";
import { BadgePrioridade } from "@/components/layoute/BadgePrioridade";
import { BadgeFuncao } from "@/components/layoute/BadgeFuncao";
import { InforOrdemServico } from "./InforOrdemServico";
import { OrdenservicoProps } from "@/src/app/lib/type";

export function MobileAtividadeCards({ data }: { data: OrdenservicoProps }) {
  return (
    <Card className="border-gray-400/20 bg-white/5 mb-3 overflow-hidden py-1 active:scale-[0.98] transition-transform">
      <CardContent className="p-4">
        {/* Header do Card Mobile: OS e Prioridade */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-400 font-mono font-bold text-sm">
                {data.os}
              </span>
              <BadgePrioridade prioridade={data.prioridade} />
            </div>
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">
              {data.atividade}
            </span>
          </div>
          {/* Componente que abre o Modal de Detalhes que você já tem */}
          <InforOrdemServico data={data} />
        </div>

        {/* Grades de Informações */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-2">
          {/* Status e Tipo */}
          <div className="flex flex-col gap-1">
            <span className="text-[9px] text-slate-500 uppercase font-bold">
              Status / Serviço
            </span>
            <div className="flex flex-col gap-1 items-start">
              <BadgeStatus status={data.status} />
              <BadgeTipoServico tipo={data.tipoServico} />
            </div>
          </div>

          {/* Categoria */}
          <div className="flex flex-col gap-1">
            <span className="text-[9px] text-slate-500 uppercase font-bold">
              Setor
            </span>
            <BadgeFuncao funcao={data.tipo as string} />
          </div>

          {/* Técnico */}
          <div className="flex flex-col gap-1 col-span-1">
            <span className="text-[9px] text-slate-500 uppercase font-bold">
              Responsável
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <User size={12} className="text-blue-400" />
              <span className="truncate">{data.tecnico.split(" - ")[0]}</span>
            </div>
          </div>

          {/* Data */}
          <div className="flex flex-col gap-1 col-span-1">
            <span className="text-[9px] text-slate-500 uppercase font-bold">
              Data Referência
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
              <Calendar size={12} className="text-slate-500" />
              {formatarData(data.dataFinalizado ?? data.dataAbertura)}
            </div>
          </div>
        </div>

        {/* Rodapé do Card Mobile: Local */}
        <div className="mt-4 pt-3 border-t border-gray-400/10 flex justify-between items-center">
          <span className="text-[10px] text-slate-500 italic truncate max-w-[200px]">
            📍 {data.local} - {data.complexo}
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
        </div>
      </CardContent>
    </Card>
  );
}
