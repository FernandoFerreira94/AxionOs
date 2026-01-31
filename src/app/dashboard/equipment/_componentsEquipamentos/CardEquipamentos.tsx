import { Card, CardContent } from "@/components/ui/card";
import { color } from "@/src/app/styles/color";
import { Package, Snowflake, Zap, PowerOff, PowerIcon } from "lucide-react";

const infoCard = [
  {
    titulo: "Total",
    Icon: Package,
    color: color.textIconAzul,
    bg: color.bgIconAzul,
    qtd: 23,
  },
  {
    titulo: "Elétrica",
    Icon: Zap,
    color: color.textIconAmarelo,
    bg: color.bgIconAmarelo,
    qtd: 15,
  },
  {
    titulo: "Refrigeração",
    Icon: Snowflake,
    color: color.textIconAzulClaro,
    bg: color.bgIconAzulClaro,
    qtd: 8,
  },
  {
    titulo: "Ativos",
    Icon: PowerIcon,
    color: color.textIconVerde,
    bg: color.bgIconVerde,
    qtd: 21,
  },
  {
    titulo: "Desativados",
    Icon: PowerOff,
    color: color.textIconVermelho,
    bg: color.bgIconVermelho,
    qtd: 2,
  },
];

export function CardEquipamentos() {
  return (
    <section className="grid grid-cols-5 gap-6">
      {infoCard.map((item) => (
        <Card key={item.titulo}>
          <CardContent>
            <div className="flex items-center gap-2 mb-2">
              <item.Icon
                size={30}
                className={` p-1.5 rounded-sm ${item.color} ${item.bg}`}
              />
              <span className={`${color.textTertiary} text-sm`}>
                {item.titulo}
              </span>
            </div>
            <span className={`text-lg font-semibold ${color.textBranco} `}>
              {item.qtd}
            </span>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
