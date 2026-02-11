import { color } from "@/src/app/styles/color";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TriangleAlert, Timer } from "lucide-react";
import { formatarData } from "@/src/app/actions/formatarData";
import { calcularDiasAtraso } from "@/src/app/actions/calcularDiasAtraso";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BadgeFuncao } from "@/components/layoute/BadgeFuncao";
import { BadgePrioridade } from "@/components/layoute/BadgePrioridade";
import { MobilePreventivaCards } from "./MobilePreventivaCards";

interface Preventiva {
  equipamento: string;
  local: string;
  tipo: "Eletrica" | "Refrigeração";
  dataExecucao: Date;
  prioridade: "Alta" | "Media" | "Baixa";
}

const listPreventivas: Preventiva[] = [
  {
    equipamento: "Gerador Shopping",
    local: "Doca",
    tipo: "Eletrica",
    dataExecucao: new Date(2026, 0, 19),
    prioridade: "Alta",
  },
  {
    equipamento: "Ar-Condicionado",
    local: "Qto 04",
    tipo: "Refrigeração",
    dataExecucao: new Date(2026, 0, 8),
    prioridade: "Media",
  },
  {
    equipamento: "Painel eletrico",
    local: "Almoxerifado",
    tipo: "Eletrica",
    dataExecucao: new Date(2026, 0, 22),
    prioridade: "Baixa",
  },
];
export default function SectionDashboardPreventivas() {
  return (
    <Card
      className={`${color.bgCard} max-sm:bg-transparent max-sm:mb-3 max-sm:border-none border max-sm:p-0 border-gray-400/20`}
    >
      {" "}
      <CardHeader className="max-sm:p-0">
        <CardTitle className="flex items-center gap-2">
          <TriangleAlert
            size={30}
            className={`${color.textIconVermelho} ${color.bgIconVermelho} p-1.5 rounded-sm`}
          />
          <h2 className={`${color.textBranco}`}>Preventivas Vencidas</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="max-sm:p-0">
        {/* --- VERSÃO DESKTOP (TABELA) --- */}
        <ScrollArea className="max-h-150 w-full">
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow className={`border-gray-400/20 ${color.textBranco}`}>
                  <TableHead>Equipamento / Local</TableHead>
                  <TableHead>Departamento</TableHead>

                  <TableHead>Atraso (dias)</TableHead>
                  <TableHead className="flex items-center justify-center">
                    Data / Prioridade
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {listPreventivas.map((iten) => (
                  <TableRow
                    key={iten.equipamento}
                    className="border-gray-400/10 hover:bg-white/5 transition-colors"
                  >
                    <TableCell className="">
                      <div className="flex flex-col gap-1 ">
                        <span>{iten.equipamento}</span>
                        <span className="text-xs text-slate-400">
                          {" "}
                          {iten.local}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <BadgeFuncao funcao={iten.tipo} />
                    </TableCell>
                    <TableCell
                      className={`flex items-center gap-2 ${calcularDiasAtraso(iten.dataExecucao) <= 2 ? color.textIconVerde : calcularDiasAtraso(iten.dataExecucao) <= 5 ? color.textIconAmarelo : color.textIconVermelho}`}
                    >
                      <Timer size={20} />{" "}
                      {calcularDiasAtraso(iten.dataExecucao)} dias
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1 items-center">
                        <span className="text-xs">
                          {formatarData(iten.dataExecucao)}
                        </span>
                        <BadgePrioridade prioridade={iten.prioridade} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* --- VERSÃO MOBILE (CARDS) --- */}
          <div className="md:hidden flex flex-col gap-3">
            {listPreventivas.map((item) => (
              <MobilePreventivaCards key={item.equipamento} item={item} />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
