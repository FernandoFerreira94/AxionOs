"use client";
import { color } from "@/src/app/styles/color";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp, User } from "lucide-react";
import { formatarData } from "@/src/app/actions/formatarData";
import { InforOrdemServico } from "@/components/layoute/InforOrdemServico";
import { ScrollArea } from "@/components/ui/scroll-area";
import { OrdenservicoProps } from "@/src/app/lib/type";
import { BadgeTipoServico } from "@/components/layoute/BadgeTipoServico";
import { BadgeStatus } from "@/components/layoute/BadgeStatus";
import { BadgePrioridade } from "@/components/layoute/BadgePrioridade";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BadgeFuncao } from "@/components/layoute/BadgeFuncao";
import { MobileAtividadeCards } from "./MobileAtividadeCards";

const listAtividades: OrdenservicoProps[] = [
  {
    os: "#RF-1023",
    status: "Aberto",
    tipoServico: "Corretiva",
    tipo: "Refrigeração",
    atividade: "Ar-Condicionado",
    tecnico: "Eduardo Perotti - M6",
    dataAbertura: new Date(2026, 0, 12),
    dataFinalizado: null,
    descricao: "Completado Gas R-22",
    local: "Qto 04",
    complexo: "Shopping",
    apoio: null,
    prioridade: "Alta",
    materiais: ["Gas R-22"],
  },
  {
    os: "#EL-1245",
    status: "Material",
    tipoServico: "Melhoria",
    tipo: "Eletrica",
    atividade: "Troca de luminaria",
    tecnico: "Fernando Pedro - M5",
    dataAbertura: new Date(2026, 0, 23),
    dataFinalizado: new Date(2026, 0, 24),
    descricao: "Troca de 4 luminarias",
    local: "Mall NS Barra",
    complexo: "Shopping",
    apoio: null,
    prioridade: "Baixa",
    materiais: [
      {
        material: "Luminarias",
        qtd: 4,
      },
      {
        material: "Plug macho 10A",
        qtd: 4,
      },
    ],
  },
  {
    os: "#EL-45784",
    status: "Fiscalização",

    tipoServico: "Corretiva",
    tipo: "Eletrica",
    atividade: "Troca de disjuntor geral",
    tecnico: "Fernando Pedro - M5",
    dataAbertura: new Date(2026, 0, 23),
    dataFinalizado: new Date(2026, 0, 25),
    descricao: "Foi trocado 2 disjuntores",
    local: "Quadro Refeitorio QE-145",
    complexo: "Shopping",
    apoio: ["Eduardo Perotti - M6"],
    prioridade: "Media",
    materiais: ["Disjuntor 20A  (2 unidades)"],
  },
  {
    os: "#CV-1254",
    status: "Finalizado",
    tipoServico: "Acompanhamento",
    tipo: "Civil",
    atividade: "Troca de pastilhas",
    tecnico: "Marcelo Mendes - M4",
    dataAbertura: new Date(2026, 0, 12),
    dataFinalizado: new Date(2026, 0, 19),
    descricao: "Foram troca pastilhas encima do letreiro Colinas Eco Primo",
    local: "Estacionamento Primo",
    complexo: "Shopping",
    apoio: ["Izais Silva - M7", "Fabio Carvalho - M2"],
    prioridade: "Alta",
    materiais: null,
  },
];

export default function SectionDashboardAtividades() {
  return (
    <ScrollArea className="h-150 w-full">
    <Card className={`${color.bgCard} max-sm:bg-transparent max-sm:mb-3 max-sm:border-none max-sm:pt-4 border-gray-400/20`}>
        <CardHeader className="max-sm:p-0">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp
              size={30}
              className={`${color.textIconAzul} ${color.bgIconAzul} p-1.5 rounded-sm`}
            />
            <h2 className={`${color.textBranco}`}>Atividades Recentes</h2>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="max-sm:p-0 ">
          {/* --- VERSÃO DESKTOP (TABELA) --- */}
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow className={`hover:bg-transparent border-gray-400/20 ${color.textBranco}`}>
                  <TableHead>OS</TableHead>
                  <TableHead>Tipo / Status</TableHead>
                  <TableHead>Categoria / Técnico</TableHead>
                  <TableHead>Data / Prioridade</TableHead>
                </TableRow>
              </TableHeader>
                  <TableBody>

              {listAtividades.map((item) => {

                return (

                  <TableRow

                    key={item.os}

                    className={`border-gray-400/10 hover:bg-white/5  ${color.textTertiary} hover:${color.textBranco} cursor-pointer group`}

                  >

                    {/* Coluna OS */}

                    <TableCell className="font-mono text-sm">

                      <InforOrdemServico data={item} />

                    </TableCell>



                    {/* Coluna Tipo / Status - 2. CORREÇÃO: Div interna para o Flex */}

                    <TableCell>

                      <div className="flex flex-col items-start gap-1.5">

                        <BadgeTipoServico tipo={item.tipoServico} />

                        <BadgeStatus status={item.status} />

                      </div>

                    </TableCell>



                    {/* Coluna Categoria / Tecnico */}

                    <TableCell>

                      <div className="flex flex-col items-start gap-1">

                        <BadgeFuncao funcao={item.tipo as string} />

                        <span className="text-xs text-slate-400 flex items-center gap-1">

                          <User size={12} /> {item.tecnico}

                        </span>

                      </div>

                    </TableCell>



                    {/* Coluna Data */}

                    <TableCell>

                      <div className="flex flex-col  gap-1 items-center">

                        <span className={`text-xs ${color.textBranco}`}>

                          {formatarData(

                            item.dataFinalizado ?? item.dataAbertura,

                          )}

                        </span>

                        <BadgePrioridade prioridade={item.prioridade} />

                      </div>

                    </TableCell>

                  </TableRow>

                );

              })}

            </TableBody>
            </Table>
          </div>

          {/* --- VERSÃO MOBILE (CARDS) --- */}
          <div className="md:hidden space-y-4">
             {listAtividades.map((item) => (
               <MobileAtividadeCards key={item.os} data={item} />
             ))}
          </div>
        </CardContent>
      </Card>
    </ScrollArea>
  );
}