import { color } from "@/src/app/styles/color";
import { Timer, TriangleAlert } from "lucide-react";

export const getStatusAgendamento = (data: Date) => {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const dataPrev = new Date(data);
  dataPrev.setHours(0, 0, 0, 0);

  const diffTime = dataPrev.getTime() - hoje.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0)
    return {
      label: `Faltam ${diffDays} dias`,
      color: "text-green-500",
      icon: <Timer size={14} />,
    };
  if (diffDays === 0)
    return {
      label: "Hoje",
      color: "text-yellow-500 animate-pulse",
      icon: <Timer size={14} />,
    };
  return {
    label: `Vencido há ${Math.abs(diffDays)} dias`,
    color: color.textIconVermelho,
    icon: <TriangleAlert size={14} />,
  };
};
