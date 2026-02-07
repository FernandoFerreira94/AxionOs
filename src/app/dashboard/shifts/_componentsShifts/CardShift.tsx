"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { color } from "@/src/app/styles/color";
import { Users, Sun, Moon, UserCircle, Clock, ClockFading } from "lucide-react";
// Mock de dados dos plantonistas por turno
const shiftsData = [
  {
    id: 1,
    label: "Turno A",
    periodo: "Diurno",
    icon: Sun,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    tecnicos: [
      { nome: "Izais Silva", funcao: "M-7" },
      { nome: "Fernando Pedro", funcao: "M-5" },
      { nome: "Eduarto Perotti", funcao: "M-6" },
      { nome: "Marcelo Mendes", funcao: "M-4" },
    ],

    horario: "07:00 - 19:00",
    workDay: false,
  },
  {
    id: 2,
    label: "Turno B",
    periodo: "Diurno",
    icon: Sun,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500",
    tecnicos: [
      { nome: "Izais Silva", funcao: "M-7" },
      { nome: "Fernando Pedro", funcao: "M-5" },
      { nome: "Eduarto Perotti", funcao: "M-6" },
      { nome: "Marcelo Mendes", funcao: "M-4" },
    ],
    horario: "07:00 - 19:00",
    workDay: true,
  },

  {
    id: 3,
    label: "Turno A",
    periodo: "Noturno",
    icon: Moon,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    tecnicos: [
      { nome: "Izais Silva", funcao: "M-7" },
      { nome: "Fernando Pedro", funcao: "M-5" },
      { nome: "Eduarto Perotti", funcao: "M-6" },
      { nome: "Marcelo Mendes", funcao: "M-4" },
    ],
    horario: "19:00 - 07:00",
    workDay: false,
  },
  {
    id: 4,
    label: "Turno B",
    periodo: "Noturno",
    icon: Moon,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400",
    tecnicos: [
      { nome: "Izais Silva", funcao: "M-7" },
      { nome: "Fernando Pedro", funcao: "M-5" },
      { nome: "Eduarto Perotti", funcao: "M-6" },
      { nome: "Marcelo Mendes", funcao: "M-4" },
    ],
    horario: "19:00 - 07:00",
    workDay: true,
  },
];

export function CardShifts() {
  return (
    <Card className={`  `}>
      <CardHeader className="pb-6">
        <CardTitle className={`flex items-center gap-2 ${color.textBranco}`}>
          <Users
            size={32}
            className={`${color.textIconAzul} ${color.bgIconAzul} p-1.5 rounded-md`}
          />
          Quadro de Plantões
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* Grid com 4 colunas para os turnos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {shiftsData.map((shift) => (
            <div
              key={shift.id}
              className={`relative overflow-hidden rounded-xl border    p-4 transition-all group ${color.bgMain} ${shift.workDay ? shift.border : `border-gray-400/20`}`}
            >
              {/* Header do Mini Card */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider text-slate-500`}
                  >
                    {shift.label}
                  </span>
                  <span className={`text-lg font-bold ${color.textBranco}`}>
                    {shift.periodo}
                  </span>
                </div>
                <shift.icon
                  size={24}
                  className={`${shift.color} ${shift.bg} p-1 rounded-full`}
                />
              </div>
              {/* Informação do Técnico */}
              <div className="p-4 flex-grow space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">
                    Equipe Escalada
                  </span>
                  <span className="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded">
                    {shift.tecnicos.length} Integrantes
                  </span>
                </div>

                <div className="space-y-2 max-h-[160px] overflow-y-auto pr-2 custom-scrollbar">
                  {shift.tecnicos.map((nome, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 group/item"
                    >
                      <UserCircle
                        size={16}
                        className="text-slate-600 group-hover/item:text-blue-400 transition-colors"
                      />
                      <span className="text-sm text-slate-300 font-medium truncate">
                        {nome.nome}
                      </span>
                      <span className="text-slate-500 font-bold uppercase tracking-tight text-[11px]">
                        {nome.funcao}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Detalhe visual de hover */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-0 bg-blue-400 transition-all group-hover:w-full`}
              />
              <span className=" text-slate-500 text-xs ml-4 flex items-center gap-2">
                <ClockFading size={14} className="text-slate-500" />{" "}
                {shift.horario}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
