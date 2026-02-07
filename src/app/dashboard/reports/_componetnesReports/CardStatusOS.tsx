"use client";

import { Card, CardContent } from "@/components/ui/card";
import { color } from "@/src/app/styles/color";
import {
  ClipboardList,
  CheckCircle2,
  PlayCircle,
  AlertCircle,
  TrendingUp,
  Wrench,
  Logs,
} from "lucide-react";

export function CardStatusOS() {
  const resumo = [
    {
      label: "Total de Ordens",
      valor: "115",
      subtexto: "+12% que mês anterior",
      icon: Logs,
      cor: color.textIconCinza,
      bg: color.bgIconCinza,
      border: "border-blue-500/20",
    },
    {
      label: "Finalizadas",
      valor: "82",
      subtexto: "71% de taxa de conclusão",
      icon: CheckCircle2,
      cor: color.textIconVerde,
      bg: color.bgIconVerde,
      border: "border-emerald-500/20",
    },
    {
      label: "Em Execução",
      valor: "18",
      subtexto: "4 urgências detectadas",
      icon: Wrench,
      cor: color.textIconAzul,
      bg: color.bgIconAzul,
      border: "border-amber-500/20",
    },
    {
      label: "Abertas",
      valor: "15",
      subtexto: "Aguardando triagem",
      icon: ClipboardList,
      cor: color.textIconAmarelo,
      bg: color.bgIconAmarelo,
      border: "border-red-500/20",
    },
  ];

  return (
    <Card className="grid grid-cols-4 gap-4 mt-6 p-6">
      {resumo.map((item, index) => (
        <Card
          key={index}
          className={` border-gray-400/20 overflow-hidden relative group ${color.bgMain}`}
        >
          <CardContent className="py-2 px-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">
                  {item.label}
                </p>
                <h3
                  className={`text-2xl font-black ${color.textBranco} tracking-tight`}
                >
                  {item.valor}
                </h3>
              </div>
              <div className={`${item.bg} ${item.cor} p-2 rounded-lg`}>
                <item.icon size={22} />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-1.5">
              <TrendingUp size={12} className={item.cor} />
              <span className="text-[11px] text-slate-400 font-medium italic">
                {item.subtexto}
              </span>
            </div>

            {/* Linha decorativa de progresso na base do card */}
            <div
              className={`absolute bottom-0 left-0 h-[2px] w-0 bg-current transition-all duration-500 group-hover:w-full ${item.cor}`}
            />
          </CardContent>
        </Card>
      ))}
    </Card>
  );
}
