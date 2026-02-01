"use client";

import { BadgeFuncao } from "@/components/layoute/BadgeFuncao";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { color } from "@/src/app/styles/color";
import { ReceiptText, CheckCircle2, UserCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const materiaisParaBaixa = [
  {
    id: "101",
    os: "#AC-1023",
    tecnico: "Eduardo Perotti",
    descricao: "Filtro de Ar Condicionado G4",
    categoria: "Refrigeração",
    quantidade: "2",
    unidade: "un",
    dataUso: "Hoje, 09:30",
  },
  {
    id: "102",
    os: "#EL-45784",
    tecnico: "Fernando Pedro",
    descricao: "Fita Isolante 20m",
    categoria: "Eletrica",
    quantidade: "1",
    unidade: "un",
    dataUso: "Hoje, 08:15",
  },
  {
    id: "102",
    os: "#EL-45784",
    tecnico: "Fernando Pedro",
    descricao: "Fita Isolante 20m",
    categoria: "Eletrica",
    quantidade: "1",
    unidade: "un",
    dataUso: "Hoje, 08:15",
  },
];

export function CardBaixaMaterial() {
  return (
    <Card className={`border-gray-400/40  ${color.textBranco}`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <ReceiptText
            size={30}
            className={`${color.textIconAzulClaro} ${color.bgIconAzulClaro} p-1.5 rounded-sm`}
          />
          <h2 className="text-xl font-bold text-white">Materiais para Baixa</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-gray-400/20 hover:bg-transparent">
              <TableHead>OS / Técnico</TableHead>
              <TableHead>Material</TableHead>
              <TableHead className="text-center">Qtd</TableHead>
              <TableHead className="text-right">Ação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {materiaisParaBaixa.map((item) => (
              <TableRow
                key={item.id}
                className="border-gray-400/10 hover:bg-white/5 transition-colors group"
              >
                {/* VINCULO E TÉCNICO */}
                <TableCell className="py-2">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-mono text-blue-400">
                      {item.os}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-slate-400">
                      <UserCircle size={12} />
                      {item.tecnico}
                    </div>
                  </div>
                </TableCell>

                {/* MATERIAL */}
                <TableCell className="py-2">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium leading-tight text-white">
                      {item.descricao}
                    </span>
                    <div className="scale-75 origin-left mt-1">
                      <BadgeFuncao funcao={item.categoria} />
                    </div>
                  </div>
                </TableCell>

                {/* QUANTIDADE */}
                <TableCell className="py-2 text-center">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-amber-500">
                      {item.quantidade}
                    </span>
                    <span className="text-[9px] text-slate-500 uppercase">
                      {item.unidade}
                    </span>
                  </div>
                </TableCell>

                {/* BOTÃO DE CONFIRMAÇÃO */}
                <TableCell className="py-2 text-right">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`h-8 w-8 `}
                      >
                        <CheckCircle2 size={18} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Confirmar Baixa</TooltipContent>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
