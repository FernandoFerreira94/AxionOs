import { color } from "@/src/app/styles/color";
import { CalendarCheck, CircleCheck, TriangleAlert } from "lucide-react";

export const Preventivas = [
  {
    titulo: "Preventivas programadas",
    qtd: 13,
    Icon: CalendarCheck,
    color: color.textIconAzul,
    bg: color.bgIconAzul,
  },
  {
    titulo: "Vencidas",
    qtd: 3,
    Icon: TriangleAlert,
    color: color.textIconVermelho,
    bg: color.bgIconVermelho,
  },
  {
    titulo: "Finalizadas",
    qtd: 0,
    Icon: CircleCheck,
    color: color.textIconVerde,
    bg: color.bgIconVerde,
  },
];
