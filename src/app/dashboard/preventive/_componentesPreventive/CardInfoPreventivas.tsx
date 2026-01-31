import { Card, CardContent } from "@/components/ui/card";
import { color } from "@/src/app/styles/color";
import { Preventivas } from "../utils/cardInfoPreventivas";

export function CardPreventivas() {
  return (
    <section className="grid grid-cols-3 gap-6">
      {Preventivas.map((item) => (
        <Card key={item.titulo}>
          <CardContent className="flex flex-col gap-2 ">
            <div className="flex items-center gap-2">
              <item.Icon
                size={30}
                className={` p-1.5 rounded-sm ${item.color} ${item.bg}`}
              />
              <span className={`${color.textSecondary} text-sm`}>
                {item.titulo}
              </span>
            </div>

            <p
              className={`text-lg font-semibold ${item.color} ${item.titulo === "Preventivas programadas" && color.textBranco}`}
            >
              {item.qtd}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
