import { color } from "@/src/app/styles/color";

type BadgeTipoServicoProps = {
  tipo: "Corretiva" | "Melhoria" | "Acompanhamento" | null;
};

export function BadgeTipoServico({ tipo }: BadgeTipoServicoProps) {
  return (
    <span
      className={` ${tipo === "Corretiva" ? `${color.textIconMarron}` : tipo === "Melhoria" ? `${color.textIconVerde}` : `${color.textIconAzulClaro}`} text-xs`}
    >
      {tipo}
    </span>
  );
}
