import { color } from "@/src/app/styles/color";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TrendingUp, MoveRight   } from "lucide-react";
import { formatarData } from "@/src/app/actions/formatarData";
import { statusConfig } from "@/src/app/utils/statusConfig";

interface Props {
  os: string,
  status: "Aberto" |  "Em Execução" | "Aguardando Material" | "Aguardando Fiscalização" | "Finalizado",
  preStatus? :"Aberto" |  "Em Execução" | "Aguardando Material" | "Aguardando Fiscalização" | "Finalizado" | null,
  tipoServico: "Corretiva" | "Melhoria" | "Acompanhamento",
  tipo: "Refrigeração" | "Eletrico",
  atividade: string,
  tecnico: string,
  dataAbertura: Date,
  dataFinalizado?: Date | null,
  descricao: string,
  local: string,
  complexo: string,
  apoio: string | null
}

const listAtividades: Props[]  = [
  {
    os: "#1023",
    status: "Aberto",
    preStatus: null,
    tipoServico: "Corretiva",
    tipo: "Refrigeração",
    atividade: "Ar-Condicionado",
    tecnico: "Eduardo Perotti",
    dataAbertura: new Date(2026, 0, 12),
    dataFinalizado: new Date(2026, 0, 19),
    descricao: "Completado Gas R-22",
    local: "Qto 04",
    complexo: "Shopping",
    apoio: null,
  },
  {
    os: "#AC1245",
    status: "Aguardando Material",
    preStatus: "Aberto",
    tipoServico: "Melhoria",
    tipo: "Eletrico",
    atividade: "Troca de luminaria",
    tecnico: "Fernando Pedro",
    dataAbertura: new Date(2026, 0, 23),
    dataFinalizado: new Date(2026,0,24),
    descricao: "Troca de 4 luminarias, aguardando material",
    local: "Mall NS Barra",
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

 {listAtividades.map((item) => {
      const config = statusConfig[item.status as keyof typeof statusConfig];
 console.log(config)
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
              <span className={`${color.textTertiary} flex gap-2`}>
                <span>OS</span>
                {item.os}
              </span>

              <span
                className={`px-3 py-0.5 ${color.bgIconMarron} ${color.textIconMarron} rounded-xl text-sm`}
              >
                {item.tipoServico}
              </span>

              <span
                className={`px-2 py-1 rounded-lg text-sm ${
                  item.tipo === "Eletrico"
                    ? `${color.textIconAmarelo} ${color.bgIconAmarelo}`
                    : `${color.textIconAzulClaro} ${color.bgIconAzulClaro}`
                }`}
              >
                {item.tipo}
              </span>
            </div>

            <div className="flex gap-2 items-center text-sm">
              <span>{item.preStatus}</span>
              <MoveRight  size={20} className={`${color.textTertiary}`} />
              <span>{item.status}</span>
              <span className={color.textTertiary}>
                {formatarData(item.dataFinalizado || item.dataAbertura) }
              </span>
            </div>
          </div>
        </li>
      );
    })}

        </ul>
      </CardContent>
    </Card>
  );
}
