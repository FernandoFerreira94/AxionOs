import { color } from "@/src/app/styles/color";
import { Badge } from "../ui/badge";
import { PrioridadeProps } from "@/src/app/lib/type";

interface BadgePrioridadeProps {
  prioridade: PrioridadeProps;
}
export function BadgePrioridade({ prioridade }: BadgePrioridadeProps) {
  return (
    <Badge
      variant="outline"
      className={`
                   ${
                     prioridade === "Alta"
                       ? `border-red-500/50  ${color.textIconVermelho} ${color.bgIconVermelho}`
                       : prioridade === "Media"
                         ? `border-yellow-500/50 ${color.textIconAmarelo} ${color.bgIconAmarelo}`
                         : prioridade === "Baixa"
                           ? `border-green-500/50 ${color.textIconVerde} ${color.bgIconVerde}`
                           : `boreder-gray-500/50 ${color.textIconCinza} ${color.bgIconCinza}`
                   }
                      `}
    >
      {prioridade}
    </Badge>
  );
}
