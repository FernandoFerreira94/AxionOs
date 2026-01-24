import { color } from "@/src/app/styles/color";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TriangleAlert, Timer } from "lucide-react";
import { formatarData } from "@/src/app/actions/formatarData";
import { calcularDiasAtraso } from "@/src/app/actions/calcularDiasAtraso";

interface Preventiva {
  equipamento: string;
  local: string;
  tipo: "Eletrico" | "Refrigeração";
  dataExecucao: Date;
  prioridade: "Alta" | "Media" | "Baixa";
}

const listPreventivas: Preventiva[] = [
  {
    equipamento: "Gerador Shopping",
    local: "Doca",
    tipo: "Eletrico",
    dataExecucao: new Date(2026, 0, 19),
    prioridade: "Alta",
  },
  {
    equipamento: "Ar-Condicionado",
    local: "Qto 04",
    tipo: "Refrigeração",
    dataExecucao: new Date(2026, 0, 8),
    prioridade: "Media",
  },
  {
    equipamento: "Painel eletrico",
    local: "Almoxerifado",
    tipo: "Eletrico",
    dataExecucao: new Date(2026, 0, 22),
    prioridade: "Baixa",
  },
];

export default function SectionPreventivas() {
  return (
    <Card className="border-gray-400/40">
      <CardHeader className="">
        <CardTitle className="flex items-center gap-2">
          <TriangleAlert
            size={30}
            className={`${color.textIconVermelho} ${color.bgIconVermelho} p-1.5 rounded-sm`}
          />{" "}
          <h2 className={`${color.textBranco}`}>Preventivas Vencidas</h2>
        </CardTitle>
        <CardDescription className="hidden">
          Nenhuma preventiva vencida
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className={`${color.textBranco} flex flex-col gap-2`}>
          {listPreventivas.map((item) => (
            <li
              key={item.equipamento}
              className="flex justify-between items-center border-b border-gray-200/10 p-2"
            >
              <h1>
                {item.equipamento} - {item.local}
              </h1>

              <span
                className={`text-sm px-2 py-0.5 rounded-xl ${
                  item.tipo === "Eletrico"
                    ? `${color.textIconAmarelo} ${color.bgIconAmarelo}`
                    : `${color.textIconAzulClaro} ${color.bgIconAzulClaro}`
                }`}
              >
                {item.tipo}
              </span>
              <span>Data: {formatarData(item.dataExecucao)}</span>
              <span
                className={`flex items-center gap-2 ${calcularDiasAtraso(item.dataExecucao) <= 2 ? color.textIconVerde : calcularDiasAtraso(item.dataExecucao) <= 5 ? color.textIconAmarelo : color.textIconVermelho} `}
              >
                <Timer size={20} />{" "}
                <span className={``}>
                  {calcularDiasAtraso(item.dataExecucao)} dias
                </span>
              </span>
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full ${item.prioridade === "Alta" ? "bg-[#D16163]" : item.prioridade === "Media" ? "bg-[#D1AC18]" : "bg-[#38A566]"} `}
                ></div>
                <span>{item.prioridade}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
