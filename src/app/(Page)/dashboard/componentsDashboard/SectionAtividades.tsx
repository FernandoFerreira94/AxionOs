"use client";
import { color } from "@/src/app/styles/color";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp, MoveRight } from "lucide-react";
import { formatarData } from "@/src/app/actions/formatarData";
import { statusConfig } from "@/src/app/utils/statusConfig";
import { InforOrdemServico } from "@/components/layoute/InforOrdemServico";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PropsOrdenservico } from "@/src/app/lib/type";

const listAtividades: PropsOrdenservico[] = [
  {
    os: "#AC-1023",
    status: "Aberto",
    preStatus: null,
    tipoServico: "Corretiva",
    tipo: "Refrigeração",
    atividade: "Ar-Condicionado",
    tecnico: "Eduardo Perotti",
    dataAbertura: new Date(2026, 0, 12),
    dataFinalizado: null,
    descricao: "Completado Gas R-22",
    local: "Qto 04",
    complexo: "Shopping",
    apoio: null,
    prioridade: "Alta",
    materiais: ["Gas R-22"],
  },
  {
    os: "#AC-1245",
    status: "Aguardando Material",
    preStatus: "Aberto",
    tipoServico: "Melhoria",
    tipo: "Eletrico",
    atividade: "Troca de luminaria",
    tecnico: "Fernando Pedro",
    dataAbertura: new Date(2026, 0, 23),
    dataFinalizado: new Date(2026, 0, 24),
    descricao: "Troca de 4 luminarias",
    local: "Mall NS Barra",
    complexo: "Shopping",
    apoio: null,
    prioridade: "Baixa",
    materiais: [
      {
        material: "Luminarias",
        qtd: 4,
      },
      {
        material: "Plug macho 10A",
        qtd: 4,
      },
    ],
  },
  {
    os: "#EL-45784",
    status: "Aguardando Fiscalização",
    preStatus: "Em Execução",
    tipoServico: "Corretiva",
    tipo: "Eletrico",
    atividade: "Troca de disjuntor geral",
    tecnico: "Fernando Pedro",
    dataAbertura: new Date(2026, 0, 23),
    dataFinalizado: new Date(2026, 0, 25),
    descricao: "Foi trocado 2 disjuntores",
    local: "Quadro Refeitorio QE-145",
    complexo: "Shopping",
    apoio: "Eduardo Perotti",
    prioridade: "Media",
    materiais: ["Disjuntor 20A  (2 unidades)"],
  },
  {
    os: "#CV-1254",
    status: "Finalizado",
    preStatus: "Em Execução",
    tipoServico: "Corretiva",
    tipo: "Civil",
    atividade: "Troca de pastilhas",
    tecnico: "Marcelo Mendes",
    dataAbertura: new Date(2026, 0, 12),
    dataFinalizado: new Date(2026, 0, 19),
    descricao: "Foram troca pastilhas encima do letreiro Colinas Eco Primo",
    local: "Estacionamento Primo",
    complexo: "Shopping",
    apoio: "Izais Silva - Fabio Carvalho",
    prioridade: "Alta",
    materiais: null,
  },
];

export default function SectionAtividades() {
  return (
    <ScrollArea className="h-150 w-full ">
      <Card className="border-gray-400/40 ">
        <CardHeader className="">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp
              size={30}
              className={`${color.textIconAzul} ${color.bgIconAzul} p-1.5 rounded-sm`}
            />{" "}
            <h2 className={`${color.textBranco}`}>Atividades Recentes</h2>
          </CardTitle>
          <CardDescription className="hidden">
            Nenhuma Atividades{" "}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className={`${color.textBranco}`}>
            {listAtividades.map((item) => {
              const config =
                statusConfig[item.status as keyof typeof statusConfig];
              if (!config) return null; // proteção mínima

              const StatusIcon = config.icon;

              return (
                <li
                  key={item.os}
                  className="flex items-center gap-4 border-b border-gray-200/10 p-2"
                >
                  <StatusIcon
                    size={30}
                    className={`${config.bg} ${config.text} p-1.5 rounded-sm`}
                  />

                  <div className="w-full flex flex-col gap-2">
                    <div className="flex items-center gap-4 w-full">
                      <InforOrdemServico data={item} />

                      <span
                        className={`px-3 py-0.5 ${color.bgIconMarron} ${color.textIconMarron} rounded-xl text-xs`}
                      >
                        {item.tipoServico}
                      </span>

                      <span
                        className={`px-2 py-1 rounded-lg text-xs ${
                          item.tipo === "Eletrico"
                            ? `${color.textIconAmarelo} ${color.bgIconAmarelo}`
                            : item.tipo === "Refrigeração"
                              ? `${color.textIconAzulClaro} ${color.bgIconAzulClaro}`
                              : `${color.textIconVermelho} ${color.bgIconVermelho}`
                        }`}
                      >
                        {item.tipo}
                      </span>
                    </div>

                    <div
                      className={`flex gap-2 items-center text-sm ${item.preStatus ? " justify-between" : " justify-start"}`}
                    >
                      {item.preStatus ? (
                        <>
                          <span>{item.preStatus}</span>
                          <MoveRight size={20} className={color.textTertiary} />
                          <span>{item.status}</span>

                          <span className={color.textTertiary}>
                            {formatarData(
                              item.dataFinalizado ?? item.dataAbertura,
                            )}
                          </span>
                        </>
                      ) : (
                        <>
                          <span>{item.status}</span>

                          <span className={color.textTertiary}>
                            {formatarData(item.dataAbertura)}
                          </span>
                        </>
                      )}

                      <div className="flex items-center gap-2 ">
                        <div
                          className={`w-4 h-4 rounded-full ${
                            item.prioridade === "Alta"
                              ? "bg-[#D16163]"
                              : item.prioridade === "Media"
                                ? "bg-[#D1AC18]"
                                : "bg-[#38A566]"
                          }`}
                        />
                        <span className="text-sm">{item.prioridade}</span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </ScrollArea>
  );
}
