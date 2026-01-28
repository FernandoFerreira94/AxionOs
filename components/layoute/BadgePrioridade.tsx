import { color } from "@/src/app/styles/color";
import { Badge } from "../ui/badge";

type BadgePrioridadeProps = {
  prioridade: "Alta" | "Media" | "Baixa";
};

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
                         : `border-green-500/50 ${color.textIconVerde} ${color.bgIconVerde}`
                   }
                      `}
    >
      {prioridade}
    </Badge>
  );
}
