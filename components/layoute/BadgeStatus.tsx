import { Check, ClipboardList } from "lucide-react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils"; // Utilitário padrão do Shadcn para classes
import { color } from "@/src/app/styles/color";

type StatusType =
  | "Aberto"
  | "Em Execução"
  | "Agrd Material"
  | "Agrd Fiscalização"
  | "Finalizado";

type BadgeStatusProps = {
  status: StatusType | null;
};

export function BadgeStatus({ status }: BadgeStatusProps) {
  if (!status) return null;

  // Configuração de Estilos e Ícones por Status
  const statusConfig = {
    Aberto: {
      color: color.textIconAmarelo,
      icon: <ClipboardList size={14} />,
      dot: null,
    },
    "Em Execução": {
      color: color.textIconAzul,
      icon: null,
      dot: (
        <span className="relative flex h-2 w-2 mr-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
      ),
    },
    "Agrd Material": {
      color: color.textIconMarron,
      icon: null,
      dot: null,
    },
    "Agrd Fiscalização": {
      color: color.textIconLilas,
      icon: null,
      dot: null,
    },
    Finalizado: {
      color: color.textIconVerde,
      icon: <Check size={14} />,
      dot: null,
    },
  };

  const config = statusConfig[status] || statusConfig["Aberto"];

  return (
    <Badge
      variant="ghost"
      className={cn(
        "flex w-fit items-center gap-1.5 font-medium transition-all p-0",
        config.color,
      )}
    >
      {/* Mostra o ponto pulsante se for "Em Execução", senão mostra o ícone */}
      {config.dot ? config.dot : config.icon}

      <span className="text-[10px] uppercase tracking-wider">{status}</span>
    </Badge>
  );
}
