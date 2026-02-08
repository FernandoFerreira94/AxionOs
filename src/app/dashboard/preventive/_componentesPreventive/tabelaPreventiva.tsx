import { color } from "@/src/app/styles/color";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  CheckCircle2,
  CalendarRange,
  CalendarClock,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
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
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { getStatusAgendamento } from "../utils/getSattusAgendamento";
import { BadgePrioridade } from "@/components/layoute/BadgePrioridade";
import { MobilePreventivaTableCards } from "./MobilePreventivaTableCards";

interface Preventiva {
  id: string; // Adicionado ID
  equipamento: string;
  local: string;
  tipo: "Eletrica" | "Refrigeração";
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
    tipo: "Eletrica",
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
    tipo: "Eletrica",
    dataExecucao: new Date(2026, 2, 21),
    dataFinalizado: null,
    prioridade: "Media",
    tecnico: "Fernando Ferreira",
    progresso: 0,
  },
];

export default function TabelaPreventiva() {
  return (
    <div className={` max-sm:mb-20 my-4 ${color.bgMain} `}>
        <Card className=" max-sm:bg-transparent max-sm:mt-4 max-sm:p-0">
          <CardHeader className="max-sm:p-0">
            <CardTitle className="flex items-center gap-2">
              <CalendarRange
                size={30}
                className={`${color.textIconMarron} ${color.bgIconMarron} p-1.5 rounded-sm`}
              />
              <h2 className={`${color.textBranco}`}>Preventivas Ativas</h2>
            </CardTitle>
          </CardHeader>
      <ScrollArea
        className={`h-full max-sm:h-150 w-full rounded-md  border-gray-400/40 `}
      >
          <CardContent className="max-sm:p-0 " >
            <Table className="max-sm:hidden">
              <TableHeader>
                <TableRow className="border-gray-400/20 hover:bg-transparent  }">
                  <TableHead>ID</TableHead>
                  <TableHead>Equipamento / Local</TableHead>
                  <TableHead>Categoria / Técnico</TableHead>
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
                      className={`border-gray-400/10 hover:bg-white/5 ${color.textTertiary} hover:${color.textBranco} cursor-pointer`}
                    >
                      <TableCell className="font-mono text-sm">
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
                      <TableCell className="">
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

                      <TableCell className="pl-6">
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
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className={`${color.bgCard} ${color.textBranco} `}
                          >
                            <DropdownMenuLabel>Ações</DropdownMenuLabel>
                            <DropdownMenuItem className="gap-2 cursor-pointer">
                              <Eye size={14} />
                              Visualizar detalhes
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2 cursor-pointer ">
                              <Pencil size={14} /> Editar Preventiva
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="gap-2 cursor-pointer ">
                              <Trash2 size={14} /> Excluir
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

            <div className="md:hidden space-y-2">
            {listPreventivas.map((item) => (
              <MobilePreventivaTableCards key={item.id} item={item} />
            ))}
          </div>
          </CardContent>
      </ScrollArea>
        </Card>
    </div>
  );
}
