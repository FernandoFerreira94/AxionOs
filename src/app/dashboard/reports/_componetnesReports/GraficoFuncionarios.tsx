"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { color } from "@/src/app/styles/color";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trophy } from "lucide-react";

// Mock de desempenho dos técnicos
const desempenhoDados = [
  { nome: "Eduardo Perotti", finalizadas: 7, apoio: 10, avatar: "EP" },
  { nome: "Fernando Pedro", finalizadas: 17, apoio: 13, avatar: "FP" },
  { nome: "Marcelo Mendes", finalizadas: 11, apoio: 4, avatar: "MM" },
  { nome: "Alex Santos", finalizadas: 13, apoio: 12, avatar: "AS" },
  { nome: "Antonior Silva", finalizadas: 20, apoio: 30, avatar: "AS" },
];

export function GraficoFuncionarios() {
  return (
    <Card className="border-gray-400/40 mt-6 h-full">
      <CardHeader className="pb-2">
        <CardTitle className={`flex items-center gap-2 ${color.textBranco}`}>
          <Trophy
            size={30}
            className={`text-amber-500 bg-amber-500/10 p-1.5 rounded-sm`}
          />
          Produtividade
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-100 w-full px-6 ">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-400/20 hover:bg-transparent">
                <TableHead className="w-[250px]">Técnico</TableHead>
                <TableHead className="text-center">Liderança (OS)</TableHead>
                <TableHead className="text-center">Apoio</TableHead>
                <TableHead>Gráfico Comparativo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {desempenhoDados.map((item) => (
                <TableRow
                  key={item.nome}
                  className="border-gray-400/10 hover:bg-white/5 transition-colors group"
                >
                  {/* INFO TÉCNICO */}
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-400">
                        {item.avatar}
                      </div>
                      <span className="text-sm font-medium text-slate-200">
                        {item.nome}
                      </span>
                    </div>
                  </TableCell>

                  {/* DADOS NUMÉRICOS */}
                  <TableCell className="text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-bold text-emerald-400">
                        {item.finalizadas}
                      </span>
                      <span className="text-[9px] uppercase text-slate-500">
                        Finalizadas
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-bold text-blue-400">
                        {item.apoio}
                      </span>
                      <span className="text-[9px] uppercase text-slate-500">
                        Suportes
                      </span>
                    </div>
                  </TableCell>

                  {/* MINI GRÁFICO DE BARRAS HORIZONTAL */}
                  <TableCell className="w-full min-w-[200px]">
                    <div className="flex flex-col gap-1.5">
                      {/* Barra de Finalizadas */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-slate-500 uppercase font-bold">
                          <span>Eficiência</span>
                          <span>
                            {Math.round((item.finalizadas / 50) * 100)}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 transition-all duration-700 group-hover:brightness-125"
                            style={{
                              width: `${(item.finalizadas / 50) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                      {/* Barra de Apoio */}
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 opacity-50 transition-all duration-700"
                          style={{ width: `${(item.apoio / 50) * 100}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* LEGENDA DO RANKING */}
          <div className="mt-6 flex items-center gap-6 px-2 py-3 border-t border-gray-400/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-1 bg-emerald-500 rounded-full" />
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">
                OS Finalizadas (Líder)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-1 bg-blue-500 opacity-50 rounded-full" />
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">
                Apoio Técnico
              </span>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
