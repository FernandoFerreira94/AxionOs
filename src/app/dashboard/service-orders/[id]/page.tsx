"use client";

import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { color } from "@/src/app/styles/color";
import {
  Users,
  ArrowRightCircle,
  PlusCircle,
  History,
  PackagePlus,
  PackageMinus,
  Image as ImageIcon,
  Maximize2,
  Check,
} from "lucide-react";
import { formatarData } from "@/src/app/actions/formatarData";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CardFluxoInformacao } from "./_componentes/CardFluxoStatus";
import { BadgePrioridade } from "@/components/layoute/BadgePrioridade";

// Exemplo de dados com fotos
const listAtividades = {
  os: "#AC-1023",
  status: "Em Execução",
  tipoServico: "Corretiva",
  tipo: "Refrigeração",
  atividade: "Ar-Condicionado",
  tecnico: "Eduardo Perotti",
  dataAbertura: new Date(2026, 0, 12),
  local: "Qto 04",
  complexo: "Shopping",
  prioridade: "Alta",
  historico: [
    {
      data: new Date(2026, 0, 15, 15, 30),
      usuario: "Eduardo Perotti",
      acao: "Finalizado",
      descricao:
        "Serviço concluído. Fotos do isolamento térmico refeito anexadas.",
      materiais: ["Fita isolante", "Armaflex"],
      apoio: ["Marcelo Mendes"],
      fotos: ["url1", "url2", "url3"], // Campo de fotos
      icon: <Check className="text-emerald-500" size={16} />,
    },
    {
      data: new Date(2026, 0, 13, 10, 0),
      usuario: "Eduardo Perotti",
      acao: "Aguardando Material",
      descricao: "Identificado necessidade de troca da serpentina.",
      materialCompra: ["Serpentina Cobre"],
      materiais: ["Serpentina Cobre"],
      fotos: ["url_defeito_1"], // Log com apenas uma foto
      icon: <PackagePlus className={color.textIconMarron} size={16} />,
    },
    {
      data: new Date(2026, 0, 13, 10, 0),
      usuario: "Eduardo Perotti",
      acao: "Em Execução",
      descricao: "Identificado necessidade de troca da serpentina.",
      materialCompra: ["Serpentina Cobre"],
      materiais: ["Serpentina Cobre"],
      fotos: ["url_defeito_1"], // Log com apenas uma foto
      icon: <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />,
    },
    {
      data: new Date(2026, 0, 12, 10, 0),
      usuario: "Fabio Carvalho",
      acao: "Abertura de OS",
      descricao: "Abertura de chamado preventivo.",
      materiais: [],
      fotos: null, // Sem fotos
      icon: <PlusCircle className={color.textIconAmarelo} size={16} />,
    },
  ],
};

export default function ServiceOrders() {
  return (
    <main className="w-full min-h-screen flex flex-col px-8 max-sm:px-4 pb-8 overflow-hidden">
      <HeaderDashboard
        titulo={`${listAtividades.os} - ${listAtividades.atividade}`}
        subTitulo={`Complexo: ${listAtividades.complexo} | Unidade: ${listAtividades.local}`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6 flex-1 overflow-hidden">
        <div className="lg:col-span-3 flex flex-col gap-6 overflow-hidden">
          <Card className="border-gray-400/20 bg-white/5 shadow-xl flex flex-col overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between border-b border-gray-400/10">
              <div className="flex items-center gap-2">
                <History className="text-blue-400" size={20} />
                <CardTitle className={`text-lg ${color.textBranco}`}>
                  Linha do Tempo
                </CardTitle>
              </div>
              <BadgePrioridade prioridade={listAtividades.prioridade} />
            </CardHeader>

            <CardContent className="p-0 flex-1 overflow-hidden">
              <ScrollArea className="h-[calc(100vh-250px)] p-6">
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-blue-500/40 before:to-transparent">
                  {listAtividades.historico.map((log, index) => (
                    <div
                      key={index}
                      className="relative flex items-start gap-6 ml-2"
                    >
                      <div className="absolute -left-[11px] mt-1.5 h-6 w-6 rounded-full border-4 border-[#0a0a0a] bg-gray-950 flex items-center justify-center z-10">
                        {log.icon}
                      </div>

                      <div className="flex-1 bg-white/[0.05] border border-gray-400/10 rounded-xl p-5 space-y-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-white">
                              {log.acao}
                            </span>
                            <span className="text-xs text-slate-500 uppercase font-mono tracking-tighter">
                              Responsável: {log.usuario}
                            </span>
                          </div>
                          <span className="text-[10px] text-blue-400 font-bold bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded">
                            {formatarData(log.data)}
                          </span>
                        </div>

                        {/* Relatório Técnico */}
                        <div className="space-y-1">
                          <span className="text-[9px] uppercase font-bold text-slate-600">
                            Relatório da Etapa
                          </span>
                          <div className="bg-black/40 p-3 rounded border border-gray-400/5">
                            <p className="text-sm leading-relaxed text-slate-300 italic">
                              "{log.descricao}"
                            </p>
                          </div>
                        </div>

                        {/* NOVO CAMPO: MINI CAROUSEL DE FOTOS */}
                        {log.fotos && log.fotos.length > 0 && (
                          <div className="space-y-2">
                            <span className="text-[9px] uppercase font-bold text-slate-600 flex items-center gap-1">
                              <ImageIcon size={10} /> Evidências Fotográficas
                            </span>
                            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                              {log.fotos.map((foto, fIdx) => (
                                <Dialog key={fIdx}>
                                  <DialogTrigger asChild>
                                    <div className="relative group cursor-pointer shrink-0">
                                      {/* Div que representa a imagem */}
                                      <div className="w-20 h-20 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden transition-all group-hover:border-blue-500/50">
                                        <ImageIcon
                                          className="text-slate-700 group-hover:text-blue-500 transition-colors"
                                          size={24}
                                        />
                                        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 flex items-center justify-center transition-all">
                                          <Maximize2
                                            size={14}
                                            className="opacity-0 group-hover:opacity-100 text-blue-400"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </DialogTrigger>
                                  {/* Dialog para mostrar a foto em tamanho grande */}
                                  <DialogContent className="max-w-4xl bg-black/90 border-gray-800 p-1">
                                    <div className="w-full aspect-video rounded-lg bg-gray-900 flex flex-col items-center justify-center relative">
                                      <ImageIcon
                                        size={48}
                                        className="text-slate-700"
                                      />
                                      <p className="text-slate-500 text-sm mt-4">
                                        Visualização da Imagem: {foto}
                                      </p>
                                      <span className="absolute bottom-4 right-4 text-[10px] text-slate-600 uppercase font-mono">
                                        {log.acao} - {formatarData(log.data)}
                                      </span>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Materiais e Apoio */}
                        <div className="flex flex-wrap gap-6 pt-2 border-t border-white/5">
                          {log.materialCompra && (
                            <div className="flex items-start gap-2">
                              <PackagePlus
                                size={14}
                                className="text-yellow-500"
                              />
                              <div className="flex flex-col">
                                <span className="text-[10px] text-white font-bold uppercase">
                                  Compra Necessária
                                </span>
                                <div className="flex gap-1 flex-wrap mt-1">
                                  {log.materialCompra.map((m) => (
                                    <span
                                      key={m}
                                      className="text-[10px] bg-yellow-500/10 text-yellow-500 px-2 py-0.5 rounded border border-yellow-500/20"
                                    >
                                      {m}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                          {!log.materialCompra && log.materiais.length > 0 && (
                            <div className="flex flex-col items-center gap-2 ">
                              <div className="flex items-center gap-2">
                                <PackageMinus
                                  size={14}
                                  className="text-green-500/70"
                                />{" "}
                                <span className="text-[10px] text-white font-bold uppercase">
                                  Material gasto
                                </span>
                              </div>
                              <div className="flex flex-col ">
                                <div className="flex flex-wrap gap-1">
                                  {log.materiais.map((m) => (
                                    <span
                                      key={m}
                                      className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                                    >
                                      {m}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                          {log.apoio && (
                            <div className="flex items-center gap-2">
                              <Users size={14} className="text-blue-500/70" />
                              <span className="text-[10px] text-slate-400">
                                Auxílio: {log.apoio.join(", ")}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* COLUNA LATERAL (Fica igual ao seu código) */}
        <div className="lg:col-span-1 space-y-6">
          <CardFluxoInformacao
            tecnico={listAtividades.tecnico}
            status={listAtividades.status}
            dataAbertura={listAtividades.dataAbertura}
          />
          <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20">
            <ArrowRightCircle size={18} />
            Finalizar Ordem de Serviço
          </button>
        </div>
      </div>
    </main>
  );
}
