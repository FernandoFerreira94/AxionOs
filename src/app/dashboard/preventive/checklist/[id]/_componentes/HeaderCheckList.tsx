import { Card, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Calendar, User, Settings } from "lucide-react";
import { BadgePrioridade } from "@/components/layoute/BadgePrioridade";
import { BadgeFuncao } from "@/components/layoute/BadgeFuncao";
import { PrioridadeProps } from "@/src/app/lib/type";
import { formatarData } from "@/src/app/actions/formatarData";

interface HeaderCheckListProps {
  infoEquipamento: {
    tag: string;
    nome: string;
    tecnico: string;
    prioridade: PrioridadeProps;
    dataAgendamento: Date;
    dataInicio: Date;
    localizacao: string;
    categoria: string;
  };
}

export function HeaderCheckList({ infoEquipamento }: HeaderCheckListProps) {
  return (
    <Card className="border-gray-400/20 bg-white/5 shadow-2xl">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest flex items-center gap-2">
              <Settings size={12} /> Equipamento
            </span>
            <p className="text-sm font-bold text-white">
              {infoEquipamento.nome}
            </p>
            <Badge
              variant="outline"
              className="text-[10px] border-blue-500/30 text-blue-400 bg-blue-500/5"
            >
              TAG: {infoEquipamento.tag}
            </Badge>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest flex items-center gap-2">
              <User size={12} /> Executor
            </span>
            <p className="text-sm font-bold text-slate-200">
              {infoEquipamento.tecnico}
            </p>
            <p className="text-[10px] text-slate-500 uppercase">
              Responsável Técnico
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest flex items-center gap-2">
              <Calendar size={12} /> Cronograma
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-slate-300">
                Agendado: {formatarData(infoEquipamento.dataAgendamento)}
              </span>
              <span className="text-xs text-emerald-400 font-medium">
                Iniciado: {formatarData(infoEquipamento.dataInicio)}
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest flex items-center gap-2">
              <AlertTriangle size={12} className="text-amber-500" /> Detalhes OS
            </span>
            <div className="flex flex-col gap-2">
              <BadgePrioridade prioridade={infoEquipamento.prioridade} />
              <span className="text-[10px] text-slate-400 italic">
                <BadgeFuncao funcao={infoEquipamento.categoria} />
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
