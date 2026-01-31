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
    <ScrollArea className="h-150 w-full ">
      <Card className="border-gray-400/40 ">
        <CardHeader className="">
          <CardTitle className="flex items-center gap-2">
            <TriangleAlert
              size={30}
              className={`${color.textIconVermelho} ${color.bgIconVermelho} p-1.5 rounded-sm`}
            />{" "}
            <h2 className={`${color.textBranco}`}>Preventivas Vencidas</h2>
          </CardTitle>
          <CardDescription className="hidden">
            Nenhuma preventiva vencida
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>Tabela de preventivas</TableCaption>
            <TableHeader>
              <TableRow className={`${color.textBranco}`}>
                <TableHead>Equipamento</TableHead>
                <TableHead>Departamento</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Atraso (dias)</TableHead>
                <TableHead>Prioridade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {listPreventivas.map((iten) => (
                <TableRow
                  key={iten.equipamento}
                  className={`font-medium  ${color.textTertiary} hover:${color.textBranco} cursor-pointer  hover:bg-white/5`}
                >
                  <TableCell className={`font-medium  `}>
                    {iten.equipamento} - {iten.local}
                  </TableCell>
                  <TableCell>
                    <BadgeFuncao funcao={iten.tipo} />
                  </TableCell>
                  <TableCell className={`${color.textBranco}`}>
                    {formatarData(iten.dataExecucao)}
                  </TableCell>
                  <TableCell
                    className={`flex items-center gap-2 ${calcularDiasAtraso(iten.dataExecucao) <= 2 ? color.textIconVerde : calcularDiasAtraso(iten.dataExecucao) <= 5 ? color.textIconAmarelo : color.textIconVermelho} `}
                  >
                    <Timer size={20} /> {calcularDiasAtraso(iten.dataExecucao)}{" "}
                    dias
                  </TableCell>
                  <TableCell>
                    <BadgePrioridade prioridade={iten.prioridade} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </ScrollArea>
  );
}
