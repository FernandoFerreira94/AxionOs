import { color } from "@/src/app/styles/color";
import { Badge } from "../ui/badge";

type BadgeFuncaoProps = {
  funcao: "All" | "Eletrico" | "Refrigeração" | "Civil" | null;
};

export function BadgeFuncao({ funcao }: BadgeFuncaoProps) {
  return (
    <Badge
      variant={"secondary"}
      className={`px-2 py-1 rounded-lg text-xs ${
        funcao === "Eletrico"
          ? `${color.textIconAmarelo} ${color.bgIconAmarelo}`
          : funcao === "Refrigeração"
            ? `${color.textIconAzulClaro} ${color.bgIconAzulClaro}`
            : `${color.textIconVermelho} ${color.bgIconVermelho}`
      }`}
    >
      {funcao ? funcao : "N/A"}
    </Badge>
  );
}
