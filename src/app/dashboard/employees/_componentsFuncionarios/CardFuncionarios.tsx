import { Card, CardContent } from "@/components/ui/card";
import { color } from "@/src/app/styles/color";
import { Users, UserCheck, UserX } from "lucide-react";

const infoFuncionarios = [
  {
    titulo: "Total",
    qtd: 5,
    icon: Users,
    color: color.textIconAzul,
    bg: color.bgIconAzul,
  },
  {
    titulo: "Ativos",
    qtd: 4,
    icon: UserCheck,
    color: color.textIconVerde,
    bg: color.bgIconVerde,
  },
  {
    titulo: "Inativos",
    qtd: 1,
    icon: UserX,
    color: "text-neutral-400",
    bg: "bg-neutral-700/40",
  },
];

export function CardFuncionarios() {
  return (
    <section className="grid grid-cols-3 gap-4">
      {infoFuncionarios.map((item) => (
        <Card key={item.titulo}>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <item.icon
                size={30}
                className={` p-1.5 rounded-sm ${item.color} ${item.bg}`}
              />
              <span className={`${color.textTertiary} text-sm`}>
                {item.titulo}
              </span>
            </div>
            <p className={`text-lg font-semibold ${color.textBranco}`}>
              {item.qtd}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
