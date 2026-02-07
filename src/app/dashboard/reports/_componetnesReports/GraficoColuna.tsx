"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { color } from "@/src/app/styles/color";
import { ChartColumnIncreasing, CalendarDays } from "lucide-react";

// Mock de dados baseado nas categorias que usamos anteriormente
const data = [
  { categoria: "Elétrica", total: 45 },
  { categoria: "Hidráulica", total: 28 },
  { categoria: "Ar Cond.", total: 62 },
  { categoria: "Civil", total: 15 },
  { categoria: "Outros", total: 10 },
];

// Componente de Tooltip Customizado (Style Axio)
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0f0f0f] border border-gray-800 p-3 rounded-lg shadow-2xl">
        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">
          {label}
        </p>
        <p className="text-sm font-bold text-blue-400">
          {payload[0].value}{" "}
          <span className="text-slate-300 font-normal">OS Realizadas</span>
        </p>
      </div>
    );
  }
  return null;
};

export function GraficoColuna() {
  return (
    <Card className="border-gray-400/40 ">
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <CardTitle className={`flex items-center gap-2  ${color.textBranco}`}>
          <ChartColumnIncreasing
            size={30}
            className={`${color.textIconAzul} p-1.5 ${color.bgIconAzul} rounded-sm`}
          />
          Volume de OS por Categoria
        </CardTitle>

        {/* Indicador de Filtro Ativo */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-gray-400/10 rounded-full">
          <CalendarDays size={14} className="text-blue-400" />
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-tight">
            Ref: Março / 2024
          </span>
        </div>
      </CardHeader>

      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#ffffff08"
              />
              <XAxis
                dataKey="categoria"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />
              <Tooltip
                cursor={{ fill: "#ffffff05" }}
                content={<CustomTooltip />}
              />

              <Bar dataKey="total" radius={[4, 4, 0, 0]} barSize={45}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.total > 40 ? "#3b82f6" : "#1e3a8a"} // Destaque para categorias com mais de 40 OS
                    className="hover:opacity-80 transition-opacity"
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legenda de Performance */}
        <div className="mt-6 pt-6 border-t border-gray-400/10 flex items-center justify-around text-center">
          <div>
            <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">
              Média Mensal
            </p>
            <p className={`text-lg font-bold ${color.textBranco}`}>31.8</p>
          </div>
          <div className="h-8 w-[1px] bg-gray-400/10" />
          <div>
            <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">
              Maior Demanda
            </p>
            <p className="text-lg font-bold text-blue-400">Refrigeração</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
