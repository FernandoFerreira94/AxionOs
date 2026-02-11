"use client";

import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { color } from "../../styles/color";
import {
  UserCog,
  Fingerprint,
  Briefcase,
  Clock,
  CalendarDays,
  CircleCheck,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Users() {
  // Dados fictícios para demonstração
  const colaborador = {
    nome: "Eduardo Perotti",
    matricula: "00128",
    funcao: "Técnico de Refrigeração II",
    turno: "Diurno",
    periodo: "07:00 - 19:00",
    dataContratacao: "23/12/2024",
    status: "Ativo",
  };

  return (
    <main className="w-full h-screen flex flex-col px-8 pb-4 overflow-hidden">
      <HeaderDashboard
        titulo="Usuário"
        subTitulo="Informações do colaborador"
      />

      <Card className="border-gray-400/20 mx-auto md:mx-0">
        <CardHeader
          className={`text-center flex flex-col items-center gap-4 justify-center ${color.textBranco} pb-2`}
        >
          <div className="relative">
            <UserCog
              size={80}
              className={`${color.textIconAzul} ${color.bgIconAzul} p-4 rounded-full `}
            />
            {/* Ícone de Ativo Verde */}
            <div className="absolute bottom-0 right-0 bg-[#0a0a0a] rounded-full p-1">
              <CircleCheck
                size={22}
                className="text-emerald-500 fill-emerald-500/20"
              />
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="font-bold text-2xl tracking-tight">
              {colaborador.nome}
            </h1>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold italic">
              Status: {colaborador.status}
            </span>
          </div>
        </CardHeader>

        <Separator className="bg-gray-400/10 my-4  w-auto" />

        <CardContent className="grid grid-cols-1  md:grid-cols-2 gap-6 p-8 ">
          {/* Matrícula */}
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-white/5">
              <Fingerprint size={20} className="text-blue-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">
                Matrícula
              </span>
              <span className="font-mono text-sm text-blue-300">
                {colaborador.matricula}
              </span>
            </div>
          </div>

          {/* Função */}
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-white/5">
              <Briefcase size={20} className="text-blue-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">
                Função
              </span>
              <span className={`text-sm ${color.textBranco}`}>
                {colaborador.funcao}
              </span>
            </div>
          </div>

          {/* Turno e Período */}
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-white/5">
              <Clock size={20} className="text-blue-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">
                Turno / Período
              </span>
              <span className={`text-sm ${color.textBranco}`}>
                {colaborador.turno}{" "}
                <span className="text-slate-500 mx-1">|</span>{" "}
                {colaborador.periodo}
              </span>
            </div>
          </div>

          {/* Data de Contratação */}
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-white/5">
              <CalendarDays size={20} className="text-blue-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">
                Contratação
              </span>
              <span className={`text-sm ${color.textBranco}`}>
                {colaborador.dataContratacao}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
