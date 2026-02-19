"use client";

import { BadgeFuncao } from "@/components/layoute/BadgeFuncao";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { color } from "@/src/app/styles/color";
import { Package, Hash, Building2 } from "lucide-react";
import { MobileMaterialCards } from "./MobileMaterialCards";
import { infoMaterialLista } from "../listaMaterial";

export function TabelaMaterial() {
  return (
    <Card
      className={`h-full border-gray-400/20 max-sm:p-0 max-sm:bg-transparent max-sm:border-none `}
    >
      <CardHeader className="pb-4 max-sm:p-0">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package
              size={30}
              className={`${color.textIconMarron} ${color.bgIconMarron} p-1.5 rounded-sm`}
            />
            <h2 className={`text-base ${color.textBranco}`}>
              Inventário de Estoque
            </h2>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
            {infoMaterialLista.length} Itens
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0 ">
        <ScrollArea className="max-h-180 w-full px-4 max-sm:p-0 overflow-hidden">
          {/* VIEW DESKTOP: TABELA */}
          <div className="max-sm:hidden ">
            <Table>
              <TableHeader className="sticky top-0 z-10 bg-[#0a0a0a]">
                <TableRow className="border-gray-400/20 hover:bg-transparent">
                  <TableHead>Ref</TableHead>
                  <TableHead>Material / Marca</TableHead>
                  <TableHead>Dep / Cat</TableHead>
                  <TableHead className="text-right">Estoque</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {infoMaterialLista.map((iten) => (
                  <TableRow
                    key={iten.codigo}
                    className="border-gray-400/10 hover:bg-white/5 group transition-all"
                  >
                    <TableCell className="py-4">
                      <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-400">
                        <Hash size={12} className="text-slate-600" />
                        {iten.codigo}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span
                          className={`font-medium text-sm ${color.textBranco} leading-tight`}
                        >
                          {iten.descricao}
                        </span>
                        <span className="text-[11px] text-slate-500 mt-0.5">
                          {iten.marca || "Marca não informada"}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-1 text-[11px] text-slate-300">
                          <Building2 size={12} className="text-slate-500" />
                          {iten.despartamento}
                        </div>
                        <div className="scale-90 origin-left">
                          <BadgeFuncao funcao={iten.categoria} />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="inline-flex flex-col items-end">
                        <span
                          className={`text-base font-bold ${Number(iten.quantidade) < 5 ? "text-red-400" : "text-emerald-400"}`}
                        >
                          {iten.quantidade}
                        </span>
                        <span className="text-[10px] uppercase text-slate-500 font-medium">
                          {iten.unidade}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* VIEW MOBILE: CARDS */}
          <div className="md:hidden pt-4 pb-8">
            {infoMaterialLista.map((iten) => (
              <MobileMaterialCards key={iten.codigo} item={iten} />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
