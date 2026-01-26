import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  User,
  MapPin,
  Wrench,
  AlertTriangle,
  Clock,
  Info,
  Users,
  Package,
} from "lucide-react";
import type { PropsOrdenservico } from "@/src/app/lib/type";
import { color } from "@/src/app/styles/color";
import { clsx } from "clsx";
import { statusConfig } from "@/src/app/utils/statusConfig";
import { formatarData } from "@/src/app/actions/formatarData";
import { ItemInfo } from "./InfoItem";
import { ScrollArea } from "../ui/scroll-area";

interface Props {
  data: PropsOrdenservico;
}

export function InforOrdemServico({ data }: Props) {
  const statusUI = statusConfig[data.status as keyof typeof statusConfig];
  if (!statusUI) return null;
  return (
    <Dialog>
      <DialogTrigger
        className={`${color.textTertiary} cursor-pointer hover:${color.textBranco} transition duration-300 text-sm font-medium`}
      >
        {data.os}
      </DialogTrigger>

      <DialogContent className="max-w-2xl pt-10 ">
        <DialogHeader className="flex flex-row items-center justify-between border-b pb-4 border-gray-400/40">
          <div className="space-y-1">
            <DialogTitle className="text-lg font-bold flex items-center gap-2">
              <span>{data.os}</span>
              <Badge
                variant="outline"
                className={`px-2 py-1 rounded-xl text-xs border-none  ${
                  data.tipo === "Eletrico"
                    ? `${color.textIconAmarelo} ${color.bgIconAmarelo}`
                    : data.tipo === "Refrigeração"
                      ? `${color.textIconAzulClaro} ${color.bgIconAzulClaro}`
                      : `${color.textIconVermelho} ${color.bgIconVermelho}`
                }`}
              >
                {data.tipo}
              </Badge>
            </DialogTitle>
            <p className="text-sm text-slate-500">{data.atividade}</p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <Badge
              className={`px-3 py-1 rounded-full text-xs ${statusUI.text} ${statusUI.bg}`}
            >
              {data.status}
            </Badge>
            <div className="flex items-center gap-1 text-xs font-medium text-slate-500">
              <AlertTriangle
                className={clsx(
                  "w-3 h-3",
                  data.prioridade === "Alta"
                    ? "text-[#D16163]"
                    : data.prioridade === "Media"
                      ? "text-[#D1AC18]"
                      : "text-[#38A566]",
                )}
              />
              Prioridade {data.prioridade}
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6 py-4">
          {/* Coluna 1: Informações Gerais */}
          <div className="space-y-4">
            <section>
              <h4 className="text-xs font-semibold  uppercase mb-2 flex items-center gap-2">
                <Info className="w-3 h-3" /> Detalhes da Operação
              </h4>
              <div className="space-y-4 ">
                <ItemInfo
                  label="Tipo de Serviço"
                  value={data.tipoServico}
                  icon={<Wrench className="w-4 h-4" />}
                />
                <ItemInfo
                  label="Localização"
                  value={data.local}
                  icon={<MapPin className="w-4 h-4" />}
                />
                <ItemInfo
                  label="Complexo"
                  value={data.complexo}
                  icon={<Info className="w-4 h-4" />}
                />
              </div>
            </section>
          </div>

          {/* Coluna 2: Prazos e Descrição */}

          <section className="space-y-4">
            <h4 className="text-xs font-semibold  uppercase mb-2 flex items-center gap-2">
              <Clock className="w-3 h-3" /> Cronograma
            </h4>
            <div className="space-y-2">
              <ItemInfo
                label="Abertura"
                value={formatarData(data.dataAbertura)}
                icon={<Calendar className="w-4 h-4" />}
              />
              <ItemInfo
                label="Ultima atualização"
                value={formatarData(data.dataFinalizado || data.dataAbertura)}
                icon={<Calendar className="w-4 h-4" />}
              />
            </div>
            <section>
              <h4 className="text-xs font-semibold  uppercase mb-2 flex items-center gap-2 ">
                <Users className="w-3 h-3" /> Equipe Técnica
              </h4>
              <div className="space-y-2">
                <ItemInfo
                  label="Responsável"
                  value={data.tecnico}
                  icon={<User className="w-4 h-4" />}
                />
                {data.apoio && (
                  <ItemInfo
                    label="Apoio"
                    value={data.apoio}
                    icon={<Users className="w-4 h-4" />}
                  />
                )}
              </div>
            </section>
          </section>
        </div>
        <ScrollArea className="max-h-40 w-full overflow-auto ">
          <section
            className={`p-3 rounded-lg border border-slate-200 shadow-sm mt-4 ${color.bgMain}`}
          >
            <h4
              className={`text-xs font-semibold uppercase mb-2 flex items-center gap-2 ${color.textSecondary}`}
            >
              <Package className="w-3 h-3" /> Materiais Utilizados
            </h4>

            {data.materiais && data.materiais.length > 0 ? (
              <ul className="grid grid-cols-1 gap-2">
                {data.materiais.map((item, index) => {
                  // Lógica para identificar o tipo do item
                  const isObject = typeof item !== "string" && item !== null;
                  const textoMaterial = isObject
                    ? `${item.qtd}x ${item.material}`
                    : item;

                  return (
                    <li
                      key={index}
                      className={`text-sm flex items-center gap-2 ${color.textBranco}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3477F2] shrink-0" />

                      {isObject ? (
                        <span className="flex gap-1 italic">
                          {item.material}
                          <b className={`  not-italic `}>{item.qtd}x</b>{" "}
                        </span>
                      ) : (
                        <span>{item}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className={`text-sm italic opacity-60 ${color.textBranco}`}>
                Nenhum material registrado para esta OS.
              </p>
            )}
          </section>
        </ScrollArea>

        <ScrollArea className="max-h-40 w-full overflow-auto ">
          <section
            className={` p-3 rounded-lg border border-slate-200 shadow-sm ${color.bgMain}`}
          >
            <h4
              className={`text-xs font-semibold text-gray uppercase mb-1  ${color.textSecondary}`}
            >
              Descrição Técnica
            </h4>
            <p className={`text-sm  leading-relaxed  ${color.textBranco}`}>
              {data.descricao}
            </p>
          </section>
        </ScrollArea>

        {/* NOVO CAMPO: MATERIAIS UTILIZADOS */}

        <Separator />

        <div className="flex justify-end pt-2">
          <p className="text-[10px] text-slate-400 italic">
            Axio OS - Sistema de Gestão de Manutenção
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
