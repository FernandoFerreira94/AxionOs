"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck, Save, Zap } from "lucide-react";
import { CheboxCheckList } from "./CheboxCheckList";
import { Input } from "@base-ui/react";
import { ShowListaMaterial } from "@/components/layoute/ShowListMaterial";
import { useState } from "react";
import { Trash2, Box } from "lucide-react";

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

const inputClasName =
  "bg-black/40 border-gray-700 text-xs text-white h-9 text-center";

interface MaterialSelecionado {
  id: string;
  os_id: string;
  material_id: string;
  descricao: string;
  quantidade_usada: number;
  status_baixa?: boolean;
  data_gasto?: Date;
  unidade: string;
}

export function TableCheckList({ idOs }: { idOs: string }) {
  const [materiaisUsados, setMateriaisUsados] = useState<MaterialSelecionado[]>(
    [],
  );

  const adicionarMaterial = (novoItem: MaterialSelecionado) => {
    setMateriaisUsados((prev) => {
      // Evita duplicados, apenas soma a quantidade se já existir
      const existe = prev.find(
        (item) => item.material_id === novoItem.material_id,
      );
      if (existe) {
        return prev.map((item) =>
          item.material_id === novoItem.material_id
            ? { ...item, quantidade_usada: item.quantidade_usada + 1 }
            : item,
        );
      }
      return [...prev, novoItem];
    });
  };

  const removerMaterial = (id: string) => {
    setMateriaisUsados((prev) =>
      prev.filter((item) => item.material_id !== id),
    );
  };

  const atualizarQtd = (id: string, valor: number) => {
    setMateriaisUsados((prev) =>
      prev.map((item) =>
        item.material_id === id
          ? { ...item, quantidade_usada: Math.max(1, valor) }
          : item,
      ),
    );
  };

  console.log(materiaisUsados);
  return (
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
                <CheboxCheckList
                  key={item.id}
                  id={item.id}
                  pergunta={item.pergunta}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* SEÇÃO DE MEDIÇÕES ELÉTRICAS */}
        <div className="p-6 bg-white/[0.02] border-t border-gray-400/10">
          <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2 mb-4">
            <Zap size={14} /> Grandezas Elétricas (Medição em Carga)
          </h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <div className="space-y-3">
                <span className="text-[10px] text-slate-500 font-bold uppercase">
                  Tensão entre Fases (V)
                </span>
                <div className="flex gap-2 items-center">
                  <Input placeholder="L1-L2" className={inputClasName} />
                  <Input placeholder="L2-L3" className={inputClasName} />
                  <Input placeholder="L3-L1" className={inputClasName} />
                </div>
              </div>
              <div className="space-y-3">
                <span className="text-[10px] text-slate-500 font-bold uppercase">
                  Corrente por Fase (A)
                </span>
                <div className="flex gap-2 items-center">
                  <Input placeholder="Fase R" className={inputClasName} />
                  <Input placeholder="Fase S" className={inputClasName} />
                  <Input placeholder="Fase T" className={inputClasName} />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <span className="text-[10px] text-slate-500 font-bold uppercase">
                Necessário troca de item?
              </span>
              <Input
                placeholder="Descreva componentes substituídos..."
                className="bg-black/40 border-gray-700 text-xs text-white h-12 pl-4 w-200"
              />
            </div>
            <div className="p-6 bg-white/[0.02] border-t border-gray-400/10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                  <Box size={14} /> Materiais e Peças Utilizadas
                </h4>
                <ShowListaMaterial
                  idOs={idOs}
                  onSelectMaterial={adicionarMaterial}
                />
              </div>

              {/* LISTA DE MATERIAIS SELECIONADOS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {materiaisUsados.length === 0 ? (
                  <div className="col-span-2 border border-dashed border-gray-700 rounded-lg p-8 text-center">
                    <span className="text-xs text-slate-500 uppercase italic">
                      Nenhum material adicionado a esta OS
                    </span>
                  </div>
                ) : (
                  materiaisUsados.map((item) => (
                    <div
                      key={item.id}
                      className="bg-black/40 border border-gray-700 rounded-lg p-3 flex items-center justify-between"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-blue-400 font-mono">
                          {item.material_id}
                        </span>
                        <span className="text-xs text-white font-medium truncate max-w-[180px]">
                          {item.descricao}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center bg-white/5 rounded border border-gray-700">
                          <input
                            type="number"
                            value={item.quantidade_usada}
                            onChange={(e) =>
                              atualizarQtd(
                                item.material_id,
                                Number(e.target.value),
                              )
                            }
                            className="w-12 bg-transparent text-center text-xs text-white outline-none p-1"
                          />
                          <span className="text-[10px] pr-2 text-slate-500 uppercase">
                            {item.unidade}
                          </span>
                        </div>
                        <button
                          onClick={() => removerMaterial(item.material_id)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
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
  );
}
