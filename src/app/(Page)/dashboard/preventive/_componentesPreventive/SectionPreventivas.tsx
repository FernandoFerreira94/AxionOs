"use client";

import { color } from "@/src/app/styles/color";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  MoreVertical,
  CheckCircle2,
  CalendarRange,
  CalendarClock,
} from "lucide-react";
import { formatarData } from "@/src/app/actions/formatarData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BadgeFuncao } from "@/components/layoute/BadgeFuncao";
import { Progress } from "@/components/ui/progress"; // Adicione o componente Progress do Shadcn
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getStatusAgendamento } from "../utils/getSattusAgendamento";
import { BadgePrioridade } from "@/components/layoute/BadgePrioridade";
interface Preventiva {
  id: string; // Adicionado ID
  equipamento: string;
  local: string;
  tipo: "Eletrico" | "Refrigeração";
  dataExecucao: Date;
  dataFinalizado?: Date | null;
  prioridade: "Alta" | "Media" | "Baixa";
  tecnico: string; // Adicionado Técnico
  progresso: number; // Adicionado % de conclusão
}

const listPreventivas: Preventiva[] = [
  {
    id: "EL-102",
    equipamento: "Gerador Shopping",
    local: "Doca",
    tipo: "Eletrico",
    dataExecucao: new Date(2026, 0, 30),
    dataFinalizado: new Date(2026, 1, 3),
    prioridade: "Alta",
    tecnico: "Fernando Ferreira",
    progresso: 100,
  },
  {
    id: "Ar-129",
    equipamento: "Ar condicionado ",
    local: "Sala Comercial",
    tipo: "Refrigeração",
    dataExecucao: new Date(2026, 0, 19),
    dataFinalizado: null,
    prioridade: "Media",
    tecnico: "Eduardo Perotti",
    progresso: 45,
  },
  {
    id: "El-003",
    equipamento: "Quadro Energia - QE-145",
    local: "Sala Comercial",
    tipo: "Eletrico",
    dataExecucao: new Date(2026, 2, 21),
    dataFinalizado: null,
    prioridade: "Media",
    tecnico: "Fernando Ferreira",
    progresso: 0,
  },
];

export default function SectionPreventivas() {
  return (
    <div className={`flex-1 min-h-0 w-full  my-4 ${color.bgMain}`}>
      <ScrollArea
        className={`h-full w-full rounded-md border border-gray-400/40 `}
      >
        <Card className="">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarRange
                size={30}
                className={`${color.textIconMarron} ${color.bgIconMarron} p-1.5 rounded-sm`}
              />
              <h2 className={`${color.textBranco}`}>Preventivas Ativas</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-gray-400/20 hover:bg-transparent">
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Equipamento / Local</TableHead>
                  <TableHead>Técnico</TableHead>
                  <TableHead>Agendamento</TableHead>
                  <TableHead>Checklist</TableHead>
                  <TableHead>Prioridade</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {listPreventivas.map((item) => {
                  const agendamento = getStatusAgendamento(item.dataExecucao);

                  return (
                    <TableRow
                      key={item.id}
                      className="border-gray-400/10 hover:bg-white/5"
                    >
                      <TableCell className="font-mono text-xs text-slate-400">
                        {item.id}
                      </TableCell>

                      <TableCell>
                        <div className="flex flex-col">
                          <span className={`font-medium ${color.textBranco}`}>
                            {item.equipamento}
                          </span>
                          <span className="text-xs text-slate-500">
                            {item.local}
                          </span>
                        </div>
                      </TableCell>

                      <TableCell>
                        <BadgeFuncao funcao={item.tipo} />
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                          <User size={14} className="text-slate-500" />
                          {item.tecnico}
                        </div>
                      </TableCell>

                      <TableCell>
                        {item.progresso === 100 && item.dataFinalizado ? (
                          /* ESTADO FINALIZADO */
                          <div className="flex flex-col gap-0.5">
                            {/* Mostramos a data original pequena e riscada (opcional, para histórico) */}
                            <span
                              className={`text-sm font-medium ${color.textBranco}`}
                            >
                              {formatarData(item.dataExecucao)}
                            </span>
                            <div className="flex items-center gap-1.5 text-sm  text-green-500">
                              <div className="bg-green-500/20 p-1 rounded-full">
                                <CheckCircle2 size={14} />
                              </div>
                              <span className="text-xs">
                                {formatarData(item.dataFinalizado)}
                              </span>
                            </div>
                          </div>
                        ) : (
                          /* ESTADO EM ABERTO (Sua lógica de cores anterior) */
                          <div className="flex flex-col gap-0.5">
                            <span
                              className={`text-sm font-medium ${color.textBranco}`}
                            >
                              {formatarData(item.dataExecucao)}
                            </span>
                            <div
                              className={`flex items-center gap-1 text-[11px] font-bold ${agendamento.color}`}
                            >
                              {agendamento.icon}
                              {agendamento.label}
                            </div>
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="min-w-[120px]">
                        <div className="flex flex-col gap-1.5">
                          <div className="flex justify-between text-[10px] text-slate-400">
                            <span>Progresso</span>
                            <span>{item.progresso}%</span>
                          </div>
                          <Progress
                            value={item.progresso}
                            className="h-1.5 "
                            max={100}
                          />
                        </div>
                      </TableCell>

                      <TableCell>
                        {/* Prioridade compacta */}
                        <BadgePrioridade prioridade={item.prioridade} />
                      </TableCell>
                      <TableCell>
                        {item.progresso === 100 ? (
                          <div className="flex items-center gap-2 text-green-400">
                            <CheckCircle2 size={16} />
                            <span className="text-sm font-medium">
                              Finalizado
                            </span>
                          </div>
                        ) : item.progresso > 0 ? (
                          <div className="flex items-center gap-2 text-blue-400">
                            <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                            <span className="text-sm font-medium">
                              Em Execução
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-slate-400">
                            <CalendarClock size={16} />
                            <span className="text-sm font-medium">
                              Programado
                            </span>
                          </div>
                        )}
                      </TableCell>

                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="hover:bg-white/10"
                            >
                              <MoreVertical size={16} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="bg-[#1e1e1e] border-gray-700 text-white"
                          >
                            <DropdownMenuItem className="gap-2 cursor-pointer">
                              <CheckCircle2
                                size={14}
                                className="text-green-500"
                              />{" "}
                              Finalizar
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2 cursor-pointer">
                              Visualizar Checklist
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </ScrollArea>
    </div>
  );
}
