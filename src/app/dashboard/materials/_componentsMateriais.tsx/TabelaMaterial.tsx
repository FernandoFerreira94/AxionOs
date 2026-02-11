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

export interface TabelaMaterialProps {
  codigo: string;
  descricao: string;
  despartamento: string;
  marca: string | null;
  categoria: string;
  quantidade: string;
  unidade: string;
}
// Os dados permanecem os mesmos
const infoMaterial: TabelaMaterialProps[] = [
  // ELÉTRICA
  {
    codigo: "EL-1245",
    descricao: "Luminária Quadrada Embutir 18W 3000K",
    despartamento: "Shopping Colinas",
    marca: "Avant",
    categoria: "Eletrica",
    quantidade: "23",
    unidade: "un",
  },
  {
    codigo: "EL-2090",
    descricao: "Disjuntor Monofásico DIN 20A",
    despartamento: "Shopping Colinas",
    marca: "Schneider",
    categoria: "Eletrica",
    quantidade: "15",
    unidade: "un",
  },
  {
    codigo: "EL-3341",
    descricao: "Cabo Flexível 2,5mm² Preto (Rolo 100m)",
    despartamento: "Shopping Colinas",
    marca: "Prysmian",
    categoria: "Eletrica",
    quantidade: "4", // Alerta de estoque baixo!
    unidade: "rl",
  },

  // REFRIGERAÇÃO
  {
    codigo: "AR-45782",
    descricao: "Gás Refrigerante R22 - Cilindro 1kg",
    despartamento: "Shopping Colinas",
    marca: "Chemours",
    categoria: "Refrigeração",
    quantidade: "3", // Alerta de estoque baixo!
    unidade: "un",
  },
  {
    codigo: "AR-1102",
    descricao: "Capacitor de Partida 35uF 450V",
    despartamento: "Shopping Colinas",
    marca: "WEG",
    categoria: "Refrigeração",
    quantidade: "12",
    unidade: "un",
  },
  {
    codigo: "AR-9980",
    descricao: "Fita Isolante Térmica Prata",
    despartamento: "Shopping Colinas",
    marca: "3M",
    categoria: "Refrigeração",
    quantidade: "8",
    unidade: "un",
  },

  // HIDRÁULICA
  {
    codigo: "HL-2",
    descricao: "Registro de Esfera 50mm (PVC)",
    despartamento: "Shopping Colinas",
    marca: "Tigre",
    categoria: "Hidraulica",
    quantidade: "2", // Alerta de estoque baixo!
    unidade: "un",
  },
  {
    codigo: "HL-1010",
    descricao: "Válvula de Descarga Manual",
    despartamento: "Shopping Colinas",
    marca: "Deca",
    categoria: "Hidraulica",
    quantidade: "6",
    unidade: "un",
  },
  {
    codigo: "HL-5521",
    descricao: "Anel de Vedação para Vaso Sanitário",
    despartamento: "Shopping Colinas",
    marca: "Censi",
    categoria: "Hidraulica",
    quantidade: "20",
    unidade: "un",
  },

  // CIVIL / OUTROS
  {
    codigo: "CV-0012",
    descricao: "Argamassa ACIII Cinza 20kg",
    despartamento: "Shopping Colinas",
    marca: "Votorantim",
    categoria: "Civil",
    quantidade: "10",
    unidade: "sc",
  },
  {
    codigo: "Ou-1154",
    descricao: "Spray Desengripante WD-40 300ml",
    despartamento: "Shopping Colinas",
    marca: "WD-40",
    categoria: "outros",
    quantidade: "14",
    unidade: "un",
  },
  {
    codigo: "Ou-8874",
    descricao: "Silicone Selante Transparente 280g",
    despartamento: "Shopping Colinas",
    marca: "TekBond",
    categoria: "outros",
    quantidade: "4", // Alerta de estoque baixo!
    unidade: "un",
  },
  {
    codigo: "EL-222132",
    descricao: "Fita LED Natalina Branco Quente",
    despartamento: "Shopping Colinas",
    marca: null,
    categoria: "Eletrica",
    quantidade: "30",
    unidade: "mts",
  },
];
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
            {infoMaterial.length} Itens
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
                {infoMaterial.map((iten) => (
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
            {infoMaterial.map((iten) => (
              <MobileMaterialCards key={iten.codigo} item={iten} />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
