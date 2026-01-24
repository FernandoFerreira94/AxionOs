import { color } from "@/src/app/styles/color";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TrendingUp } from "lucide-react";
import { formatarData } from "@/src/app/actions/formatarData";

const listAtividades = [
  {
    os: "#1023",
    status: "Finalizado",
    tipoServico: "Corretiva",
    tipo: "Refrigeração",
    atividade: "Ar-Condicionado",
    tecnico: "Eduardo Perotti",
    dataAbertura: new Date(2026, 0, 12),
    dataConclusao: new Date(2026, 0, 19),
    descricao: "Completado Gas R-22",
    local: "Qto 04",
    complexo: "Shopping",
    apoio: null,
  },
];

export default function SectionAtividades() {
  return (
    <Card className="border-gray-400/40">
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
          {listAtividades.map((item) => (
            <li
              key={item.os}
              className="flex justify-between flex-col gap-2 border-b border-gray-200/10 p-2"
            >
              <div
                className={`grid grid-cols-4 items-center ${color.textSecondary}`}
              >
                <h1 className={`font-semibold`}>{item.os} </h1>
                <span
                  className={`text-sm w-fit px-2 py-0.5 rounded-xl ${color.bgIconAmarelo} ${color.textIconAmarelo}`}
                >
                  {item.tipoServico}
                </span>
                <span
                  className={`text-sm w-fit px-2 py-0.5 rounded-xl ${color.bgIconAzul} ${color.textIconAzul}`}
                >
                  {item.tipo}
                </span>
                <span className="text-sm">{item.complexo}</span>
              </div>
              <div className="grid grid-cols-4">
                <span>{item.status}</span>
                <span>{item.atividade}</span>
                <span>{item.tecnico}</span>
                <div>
                  <span className="text-sm">
                    Finalizado: {formatarData(item.dataConclusao)}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
