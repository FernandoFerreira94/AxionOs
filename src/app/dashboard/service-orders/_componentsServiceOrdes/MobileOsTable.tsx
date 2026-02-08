"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MoreVertical, Eye, Pencil, Trash2, 
  MapPin, User, Calendar 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { OrdenservicoProps } from "@/src/app/lib/type";
import { color } from "@/src/app/styles/color";
import { formatarData } from "@/src/app/actions/formatarData";
import { BadgeTipoServico } from "@/components/layoute/BadgeTipoServico";
import { BadgeStatus } from "@/components/layoute/BadgeStatus";
import { BadgeFuncao } from "@/components/layoute/BadgeFuncao";
import { BadgePrioridade } from "@/components/layoute/BadgePrioridade";

export function MobileOSTableCards({ item }: { item: OrdenservicoProps }) {
  return (
    <Card className="border-gray-400/20 py-2 bg-white/5 mb-4 overflow-hidden relative group">
      <CardContent className="px-4">
        {/* Linha Superior: ID da OS e Menu de Ações */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-blue-400 font-bold">{item.os}</span>
            <BadgePrioridade prioridade={item.prioridade} />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400">
                <MoreVertical size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className={`${color.bgMain} ${color.textBranco} border-gray-700 `}>
              <DropdownMenuLabel>Gestão da OS</DropdownMenuLabel>
              <DropdownMenuItem className="gap-2"><Eye size={14}/> Detalhes</DropdownMenuItem>
              <DropdownMenuItem className="gap-2"><Pencil size={14}/> Editar</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-700"/>
              <DropdownMenuItem className="gap-2 text-red-400"><Trash2 size={14}/> Excluir</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Atividade Principal */}
        <h3 className={`text-sm font-semibold ${color.textBranco} mb-1`}>
          {item.atividade}
        </h3>
        <div className="flex items-center gap-1 text-xs text-slate-500 mb-4">
          <MapPin size={12} />
          <span className="truncate">{item.complexo} - {item.local}</span>
        </div>

        {/* Grid de Informações Técnicas */}
        <div className="grid grid-cols-2 gap-4 py-3 border-y border-gray-400/10">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] uppercase text-slate-500 font-bold tracking-widest">Status</span>
            <BadgeStatus status={item.status} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[9px] uppercase text-slate-500 font-bold tracking-widest">Serviço</span>
            <BadgeTipoServico tipo={item.tipoServico} />
          </div>
        </div>

        {/* Rodapé do Card: Técnico e Data */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-[10px]">
               <User size={12} className="text-blue-400"/>
            </div>
            <span className="italic">{item.tecnico}</span>
          </div>
          
          <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
            <Calendar size={12} />
            {formatarData(item.dataAbertura)}
          </div>
        </div>

        {/* Badge de Categoria (Floating) */}
        <div className="absolute top-14 right-4 ">
           <BadgeFuncao funcao={item.tipo as string} />
        </div>
        
      </CardContent>
    </Card>
  );
}