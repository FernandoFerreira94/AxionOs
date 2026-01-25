import {
  ClipboardList,
  Wrench,
  PackageX,
  Info,
  Check,
} from "lucide-react";
import { color } from "@/src/app/styles/color";

export const statusConfig = {
  Aberto: {
    icon: ClipboardList,
    text: color.textIconAmarelo,
    bg: color.bgIconAmarelo,
  },

  "Em Execução": {
    icon: Wrench,
    text: color.textIconAzul,
    bg: color.bgIconAzul,
  },

  "Aguardando Material": {
    icon: PackageX,
    text: color.textIconMarron,
    bg: color.bgIconMarron,
  },

  "Aguardando Fiscalização": {
    icon: Info,
    text: color.textIconLilas,
    bg: color.bgIconLilas,
  },

  Finalizado: {
    icon: Check,
    text: color.textIconVerde,
    bg: color.bgIconVerde,
  },
} as const;
