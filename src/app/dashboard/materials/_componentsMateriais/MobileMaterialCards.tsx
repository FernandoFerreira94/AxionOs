"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Hash, Building2, Package2, AlertCircle } from "lucide-react";
import { color } from "@/src/app/styles/color";
import { BadgeFuncao } from "@/components/layoute/BadgeFuncao";
import { TabelaMaterialProps } from "./TabelaMaterial";

export function MobileMaterialCards({ item }: { item: TabelaMaterialProps }) {
  const isLowStock = Number(item.quantidade) < 5;

  return (
    <Card className="border-gray-400/20 bg-white/5 mb-3 overflow-hidden">
      <CardContent className="p-4 ">
        {/* Header: Código e Quantidade */}
        <div className="flex justify-between items-start mb-2">
          <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-tighter bg-white/5 px-2 py-0.5 rounded">
            <Hash size={10} /> {item.codigo}
          </span>

          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1">
              {isLowStock && (
                <AlertCircle size={14} className="text-red-500 animate-pulse" />
              )}
              <span
                className={`text-lg font-black ${isLowStock ? "text-red-400" : "text-emerald-400"}`}
              >
                {item.quantidade}
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase">
                {item.unidade}
              </span>
            </div>
          </div>
        </div>

        {/* Descrição Principal */}
        <h3
          className={`text-sm font-semibold ${color.textBranco} leading-snug mb-1`}
        >
          {item.descricao}
        </h3>
        <p className="text-xs text-slate-500 mb-4 italic">
          {item.marca || "Marca não informada"}
        </p>

        {/* Rodapé: Categoria e Depto */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-400/10">
          <BadgeFuncao funcao={item.categoria} />

          <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
            <Building2 size={12} className="text-slate-600" />
            <span className="truncate max-w-[100px]">{item.despartamento}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
