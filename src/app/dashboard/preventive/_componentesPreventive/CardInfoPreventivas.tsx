import { Card, CardContent } from "@/components/ui/card";
import { color } from "@/src/app/styles/color";
import { Preventivas } from "../utils/cardInfoPreventivas";

export function CardPreventivas() {
  return (
    <section className="grid grid-cols-3 gap-6 max-sm:gap-4  max-sm:grid-cols-1">
      {Preventivas.map((item) => (
        <Card key={item.titulo} className="max-sm:py-4 border-gray-400/20">
          <CardContent className="flex flex-col gap-2 max-sm:flex-row max-sm:justify-between">
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
