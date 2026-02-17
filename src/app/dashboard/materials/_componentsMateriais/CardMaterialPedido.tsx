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
import { Badge } from "@/components/ui/badge";
import { color } from "@/src/app/styles/color";
import {
  ScrollText,
  Box,
  ClipboardList,
  CheckCircle2,
  Pencil,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const pedidosMaterial = [
  {
    id: "1",
    vinculo: "#AC-1023",
    tipoPedido: "OS",
    descricao: "Compressor Rotativo 12k BTU",
    marca: "Samsung",
    categoria: "Refrigeração",
    quantidade: "1",
    unidade: "un",
  },
  {
    id: "2",
    vinculo: "ESTOQUE",
    tipoPedido: "Reposição",
    descricao: "Cabo Flexível 2,5mm Preto",
    marca: "Prysmian",
    categoria: "Eletrica",
    quantidade: "100",
    unidade: "mts",
  },
  {
    id: "3",
    vinculo: "#EL-45784",
    tipoPedido: "OS",
    descricao: "Disjuntor DIN Bifásico 32A",
    marca: "Schneider",
    categoria: "Eletrica",
    quantidade: "2",
    unidade: "un",
  },
];

export function CardMaterialPedido() {
  return (
    <Card className={`h-full border-gray-400/40  ${color.textBranco}`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ScrollText
              size={30}
              className={`${color.textIconAmarelo} ${color.bgIconAmarelo} p-1.5 rounded-sm`}
            />
            <h2 className="text-xl font-bold">Solicitações de Compra</h2>
          </div>
          <Badge
            variant="outline"
            className="text-xs border-amber-500/50 text-amber-500"
          >
            Aguardando Compra
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-[#0a0a0a]">
              <TableRow className="border-gray-400/20 hover:bg-transparent">
                <TableHead className="">Origem / Ref</TableHead>
                <TableHead>Material / Marca</TableHead>
                <TableHead className="text-center">Qtd</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pedidosMaterial.map((pedido) => (
                <TableRow
                  key={pedido.id}
                  className={`border-gray-400/10 transition-colors `}
                >
                  {/* ORIGEM */}
                  <TableCell className="py-3">
                    <div className="flex flex-col gap-1">
                      {pedido.tipoPedido === "OS" ? (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-blue-400 uppercase">
                          <ClipboardList size={12} /> Ordem Serv.
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 uppercase">
                          <Box size={12} /> Reposição
                        </span>
                      )}
                      <span className="text-sm font-mono text-slate-300 italic">
                        {pedido.vinculo}
                      </span>
                    </div>
                  </TableCell>

                  {/* DESCRIÇÃO E CATEGORIA */}
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium leading-tight">
                        {pedido.descricao}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-500 italic">
                          {pedido.marca || "N/D"}
                        </span>
                        <div className="scale-[0.65] origin-left">
                          <BadgeFuncao funcao={pedido.categoria} />
                        </div>
                      </div>
                    </div>
                  </TableCell>

                  {/* QUANTIDADE */}
                  <TableCell className="text-center">
                    <div className="flex flex-col items-center justify-center bg-white/5 rounded p-1 ">
                      <span className="text-sm font-bold">
                        {pedido.quantidade}
                      </span>
                      <span className="text-[9px] uppercase text-slate-500">
                        {pedido.unidade}
                      </span>
                    </div>
                  </TableCell>

                  {/* AÇÕES: CHECK E EDITAR */}
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
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
                        <TooltipContent>Confirmar Compra</TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-slate-500 hover:text-blue-400 hover:bg-blue-400/10"
                          >
                            <Pencil size={16} />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Editar Pedido</TooltipContent>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}
