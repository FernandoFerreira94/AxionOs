import { color } from "@/src/app/styles/color";
import { Badge } from "../ui/badge";
import { CategoriaProps } from "@/src/app/lib/type";

interface BadgeFuncaoProps {
  funcao: CategoriaProps | null; // Aceita o tipo da categoria ou null
}

export function BadgeFuncao({ funcao }: { funcao: string }) {
  return (
    <Badge
      variant={"secondary"}
      className={`px-2 py-1 rounded-lg text-xs ${
        funcao === "Eletrica"
          ? `${color.textIconAmarelo} ${color.bgIconAmarelo}`
          : funcao === "Refrigeração"
            ? `${color.textIconAzulClaro} ${color.bgIconAzulClaro}`
            : funcao === "Civil"
              ? `${color.textIconVermelho} ${color.bgIconVermelho}`
              : funcao === "Hidraulica"
                ? `${color.textIconAzul} ${color.bgIconAzul}`
                : `text-gray-200 bg-gray-600`
      }`}
    >
      {funcao ? funcao : "N/A"}
    </Badge>
  );
}
