"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { color } from "@/src/app/styles/color";
import { PieChart as PieChartIcon, Activity } from "lucide-react";

// Dados fictícios baseados nos status solicitados
const data = [
  { name: "Aberto", value: 12, color: "#D1AC18" }, // Vermelho suave
  { name: "Em Execução", value: 25, color: "#5694E2" }, // Azul principal
  { name: "Material", value: 30, color: "#CF7A36" }, // Âmbar
  { name: "Fiscalização", value: 15, color: "#AB77E1" }, // Roxo/Violeta
  { name: "Finalizada", value: 40, color: "#38A566" }, // Esmeralda
];

// Tooltip customizado seguindo a identidade dark
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0f0f0f] border border-gray-800 p-3 rounded-lg shadow-2xl">
        <div className="flex items-center gap-2 mb-1">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: payload[0].payload.color }}
          />
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
            {payload[0].name}
          </span>
        </div>
        <p className="text-sm font-bold text-white">
          {payload[0].value}{" "}
          <span className="text-slate-400 font-normal ml-1">Ordens</span>
        </p>
      </div>
    );
  }
  return null;
};

export function GraficoPizza() {
  return (
    <Card className="border-gray-400/40 h-full">
      <CardHeader>
        <CardTitle className={`flex items-center gap-2  ${color.textBranco}`}>
          <PieChartIcon
            size={30}
            className={`${color.textIconMarron} p-1.5 ${color.bgIconMarron} rounded-sm`}
          />
          Status das Operações
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip content={<CustomTooltip />} />
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60} // Faz o efeito Donut
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                  />
                ))}
              </Pie>
              <Legend
                verticalAlign="bottom"
                height={36}
                content={({ payload }: any) => (
                  <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
                    {payload.map((entry: any, index: number) => (
                      <li
                        key={`item-${index}`}
                        className="flex items-center gap-1.5"
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: entry.color }}
                        />
                        <div>
                          <span className="text-[11px] text-slate-400 font-medium uppercase">
                            {entry.value}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Resumo de Eficiência no centro ou rodapé */}
        <div className="mt-4 p-4 rounded-xl bg-white/2 border border-gray-400/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-emerald-400" />
              <span className="text-xs text-slate-300 font-medium">
                Taxa de Conclusão
              </span>
            </div>
            <span className="text-sm font-bold text-emerald-400">
              {((data[4].value / 100) * 100).toFixed(0)}%
            </span>
          </div>
          <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-emerald-500 h-full transition-all duration-1000"
              style={{ width: "40%" }} // Simulação da porcentagem de finalizadas
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
