"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  MoreVertical, Eye, Pencil, Trash2, 
  User, CheckCircle2, CalendarClock, MapPin 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { color } from "@/src/app/styles/color";
import { formatarData } from "@/src/app/actions/formatarData";
import { getStatusAgendamento } from "../utils/getSattusAgendamento";
import { BadgeFuncao } from "@/components/layoute/BadgeFuncao";
import { BadgePrioridade } from "@/components/layoute/BadgePrioridade";

export function MobilePreventivaTableCards({ item }: { item: any }) {
  const agendamento = getStatusAgendamento(item.dataExecucao);
  const isFinalizado = item.progresso === 100;

  return (
    <Card className="border-gray-400/20 py-2 mb-3 overflow-hidden">
      <CardContent className="p-4">
        {/* Header: ID e Ações */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-blue-400 font-bold bg-blue-400/10 px-2 py-0.5 rounded">
              {item.id}
            </span>
            <BadgePrioridade prioridade={item.prioridade} />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400">
                <MoreVertical size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className={` ${color.textBranco} border-gray-700`}>
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuItem className="gap-2"><Eye size={14}/> Detalhes</DropdownMenuItem>
              <DropdownMenuItem className="gap-2"><Pencil size={14}/> Editar</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-700"/>
              <DropdownMenuItem className="gap-2 text-red-400"><Trash2 size={14}/> Excluir</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Equipamento e Local */}
        <div className="mb-4">
          <h3 className={`font-bold text-sm ${color.textBranco}`}>{item.equipamento}</h3>
          <div className="flex items-center justify-between gap-1 text-xs text-slate-500 mt-1">
            <div className="flex  gap-1 items-center">

            <MapPin size={12} />
            <span>{item.local}</span>
            </div>
            <BadgeFuncao funcao={item.tipo} />
          </div>
        </div>

        {/* Info Técnica (Técnico e Data) */}
        <div className="flex justify-between items-end mb-4">
          <div className="flex flex-col gap-2">
            
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <User size={12} className="text-slate-500" />
              {item.tecnico}
            </div>
          </div>

          <div className="text-right">
            <span className={`text-xs font-medium ${color.textBranco} block`}>
              {formatarData(item.dataExecucao)}
            </span>
            {!isFinalizado && (
              <div className={`flex items-center justify-end gap-1 text-[10px] font-bold ${agendamento.color}`}>
                {agendamento.icon} {agendamento.label}
              </div>
            )}
          </div>
        </div>

        {/* Barra de Progresso e Status Final */}
        <div className="pt-3 border-t border-gray-400/10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Progresso</span>
            <span className={`text-xs font-bold ${isFinalizado ? 'text-green-500' : 'text-blue-400'}`}>
              {item.progresso}%
            </span>
          </div>
          <Progress value={item.progresso} className="h-2" />
          
          <div className="mt-3 flex items-center justify-center">
            {isFinalizado ? (
              <div className="flex items-center gap-1.5 text-green-500 bg-green-500/10 px-3 py-1 rounded-full text-[11px] font-bold border border-green-500/20">
                <CheckCircle2 size={14} /> Finalizado em {formatarData(item.dataFinalizado)}
              </div>
            ) : item.progresso > 0 ? (
              <div className="flex items-center gap-1.5 text-blue-400 text-[11px] font-bold italic">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Em execução...
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold">
                <CalendarClock size={14} /> Aguardando Início
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}