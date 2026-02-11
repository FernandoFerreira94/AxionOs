"use client";

import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { color } from "@/src/app/styles/color";
import {
  Zap,
  User,
  Calendar,
  AlertTriangle,
  Settings,
  ClipboardCheck,
  CheckCircle2,
  XCircle,
  Slash,
  Save,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BadgePrioridade } from "@/components/layoute/BadgePrioridade";
import { BadgeFuncao } from "@/components/layoute/BadgeFuncao";

const infoEquipamento = {
  nome: "QGBT - Setor Shopping A",
  tag: "PE-001/26",
  categoria: "Eletrica",
  prioridade: "Alta",
  tecnico: "Eduardo Perotti",
  dataAgendamento: "11/02/2026",
  dataInicio: "11/02/2026 - 08:30",
  localizacao: "Subestação Principal",
};

const itensChecklist = [
  {
    id: 1,
    pergunta: "Reaperto de todas as conexões (Disjuntores e Barramentos)?",
  },
  {
    id: 2,
    pergunta: "Inspeção visual de sinais de aquecimento ou carbonização?",
  },
  {
    id: 3,
    pergunta:
      "Limpeza interna do painel e componentes com ar comprimido/vácuo?",
  },
  {
    id: 4,
    pergunta: "Verificação do funcionamento dos ventiladores/exaustores?",
  },
  { id: 5, pergunta: "Teste de atuação mecânica dos disjuntores principais?" },
  {
    id: 6,
    pergunta:
      "Estado das etiquetas de identificação e sinalização de segurança?",
  },
  { id: 7, pergunta: "Integridade física das canaletas e chicotes elétricos?" },
];

export default function Checklist() {
  return (
    <main className="w-full min-h-screen flex flex-col px-8 max-sm:px-4 pb-8 overflow-y-auto bg-[#050505]">
      <HeaderDashboard
        titulo={`Checklist Preventivo: ${infoEquipamento.tag}`}
        subTitulo={`Execução técnica em painéis de média tensão`}
      />

      <div className="mt-6 space-y-6">
        {/* CARD DE INFORMAÇÕES DO ATIVO E EXECUÇÃO */}
        <Card className="border-gray-400/20 bg-white/5 shadow-2xl">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest flex items-center gap-2">
                  <Settings size={12} /> Equipamento
                </span>
                <p className="text-sm font-bold text-white">
                  {infoEquipamento.nome}
                </p>
                <Badge
                  variant="outline"
                  className="text-[10px] border-blue-500/30 text-blue-400 bg-blue-500/5"
                >
                  TAG: {infoEquipamento.tag}
                </Badge>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest flex items-center gap-2">
                  <User size={12} /> Executor
                </span>
                <p className="text-sm font-bold text-slate-200">
                  {infoEquipamento.tecnico}
                </p>
                <p className="text-[10px] text-slate-500 uppercase">
                  Responsável Técnico
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest flex items-center gap-2">
                  <Calendar size={12} /> Cronograma
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-slate-300">
                    Agendado: {infoEquipamento.dataAgendamento}
                  </span>
                  <span className="text-xs text-emerald-400 font-medium">
                    Iniciado: {infoEquipamento.dataInicio}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest flex items-center gap-2">
                  <AlertTriangle size={12} className="text-amber-500" />{" "}
                  Detalhes OS
                </span>
                <div className="flex flex-col gap-2">
                  <Badge className="w-fit bg-red-500/10 text-red-500 border-red-500/20 text-[10px]">
                    Prioridade {infoEquipamento.prioridade}
                  </Badge>
                  <span className="text-[10px] text-slate-400 italic">
                    <BadgeFuncao funcao={infoEquipamento.categoria} />
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* TABELA DE CHECKLIST E MEDIÇÕES */}
        <Card className="border-gray-400/20 bg-white/5 overflow-hidden">
          <CardHeader className="border-b border-gray-400/10 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <ClipboardCheck className="text-blue-400" size={20} />
              <CardTitle className="text-lg text-white">
                Inspeção e Conformidade
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 text-[10px] uppercase tracking-widest text-slate-400 border-b border-gray-400/10">
                    <th className="px-6 py-4 font-bold">Item de Verificação</th>
                    <th className="px-6 py-4 font-bold text-center w-64">
                      Status de Conformidade
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-400/10">
                  {itensChecklist.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-slate-300">
                        <span className="text-blue-500 font-mono mr-2">
                          {String(item.id).padStart(2, "0")}
                        </span>
                        {item.pergunta}
                      </td>
                      <td className="px-6 py-4">
                        <RadioGroup
                          defaultValue="ok"
                          className="flex justify-center gap-4"
                        >
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem
                              value="ok"
                              id={`ok-${item.id}`}
                              className="text-emerald-500 border-emerald-500/50"
                            />
                            <Label
                              htmlFor={`ok-${item.id}`}
                              className="text-[10px] font-bold text-emerald-500 cursor-pointer flex items-center gap-1"
                            >
                              <CheckCircle2 size={12} /> OK
                            </Label>
                          </div>
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem
                              value="nc"
                              id={`nc-${item.id}`}
                              className="text-red-500 border-red-500/50"
                            />
                            <Label
                              htmlFor={`nc-${item.id}`}
                              className="text-[10px] font-bold text-red-500 cursor-pointer flex items-center gap-1"
                            >
                              <XCircle size={12} /> NC
                            </Label>
                          </div>
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem
                              value="na"
                              id={`na-${item.id}`}
                              className="text-slate-500 border-slate-500/50"
                            />
                            <Label
                              htmlFor={`na-${item.id}`}
                              className="text-[10px] font-bold text-slate-500 cursor-pointer flex items-center gap-1"
                            >
                              <Slash size={12} /> N/A
                            </Label>
                          </div>
                        </RadioGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SEÇÃO DE MEDIÇÕES ELÉTRICAS */}
            <div className="p-6 bg-white/[0.02] border-t border-gray-400/10">
              <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2 mb-4">
                <Zap size={14} /> Grandezas Elétricas (Medição em Carga)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">
                    Tensão entre Fases (V)
                  </span>
                  <div className="flex gap-2">
                    <Input
                      placeholder="L1-L2"
                      className="bg-black/40 border-gray-700 text-xs text-white h-9"
                    />
                    <Input
                      placeholder="L2-L3"
                      className="bg-black/40 border-gray-700 text-xs text-white h-9"
                    />
                    <Input
                      placeholder="L3-L1"
                      className="bg-black/40 border-gray-700 text-xs text-white h-9"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">
                    Corrente por Fase (A)
                  </span>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Fase R"
                      className="bg-black/40 border-gray-700 text-xs text-white h-9"
                    />
                    <Input
                      placeholder="Fase S"
                      className="bg-black/40 border-gray-700 text-xs text-white h-9"
                    />
                    <Input
                      placeholder="Fase T"
                      className="bg-black/40 border-gray-700 text-xs text-white h-9"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">
                    Necessário troca de item?
                  </span>
                  <Input
                    placeholder="Descreva componentes substituídos..."
                    className="bg-black/40 border-gray-700 text-xs text-white h-9"
                  />
                </div>
              </div>
            </div>

            {/* OBSERVAÇÕES E BOTÃO DE SALVAR */}
            <div className="p-6 border-t border-gray-400/10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:flex-1">
                <span className="text-[10px] text-slate-500 font-bold uppercase mb-2 block">
                  Observações Técnicas Finais
                </span>
                <textarea
                  className="w-full h-20 bg-black/40 border border-gray-700 rounded-lg p-3 text-sm text-slate-300 outline-none focus:border-blue-500 transition-all"
                  placeholder="Relate aqui qualquer anormalidade encontrada..."
                />
              </div>
              <button className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
                <Save size={18} />
                Salvar Checklist
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
