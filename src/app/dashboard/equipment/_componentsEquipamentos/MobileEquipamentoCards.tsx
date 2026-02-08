"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MoreVertical, Eye, Pencil, Trash2, 
  MapPin, Calendar, Settings, Box
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
import { BadgeFuncao } from "@/components/layoute/BadgeFuncao";
import { BadgeStatusEquipamento } from "./BadgeStatusEquipamento";
import { useRouter } from "next/navigation";

export function MobileEquipamentoCards({ item }: { item: any }) {
  const router = useRouter();

  return (
    <Card 
      className="border-gray-400/20 bg-white/5 mb-3 py-3 active:scale-[0.98] transition-transform"
      onClick={() => router.push(`/equipamentos/${item.id}`)}
    >
      <CardContent className="p-4">
        {/* Topo: TAG e Status */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] tracking-widest text-blue-400 font-bold bg-blue-400/10 px-2 py-0.5 rounded w-fit">
              {item.tag}
            </span>
            <h3 className={`font-bold text-sm ${color.textBranco} mt-1`}>
              {item.nome}
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            <BadgeStatusEquipamento status={item.status} />
            <DropdownMenu>
              <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400">
                  <MoreVertical size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className={`${color.bgCard} ${color.textBranco} border-gray-700`}>
                <DropdownMenuLabel>Ações</DropdownMenuLabel>
                <DropdownMenuItem className="gap-2"><Eye size={14}/> Detalhes</DropdownMenuItem>
                <DropdownMenuItem className="gap-2"><Pencil size={14}/> Editar</DropdownMenuItem>
                <DropdownMenuItem className="gap-2"><Calendar size={14}/> Programar Preventiva</DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-700"/>
                <DropdownMenuItem className="gap-2 text-red-400"><Trash2 size={14}/> Excluir</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Detalhes: Modelo e Local */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Settings size={13} className="text-slate-600" />
            <span className="truncate">{item.modelo}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <MapPin size={13} className="text-slate-600" />
            <span className="truncate">{item.local}</span>
          </div>
        </div>

        {/* Rodapé: Categoria e Data Preventiva */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-400/10">
          <BadgeFuncao funcao={item.categoria} />
          
          <div className="flex flex-col items-end">
            <span className="text-[9px] uppercase text-slate-500 font-bold tracking-tighter">Próxima Preventiva</span>
            <div className="flex items-center gap-1 text-xs text-slate-300">
               <Calendar size={12} className="text-blue-500" />
               {formatarData(item.dataPreventiva) || "Não agendada"}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}