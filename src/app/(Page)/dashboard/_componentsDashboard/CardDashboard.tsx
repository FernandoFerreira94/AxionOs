import { Card, CardContent } from "@/components/ui/card";
import { color } from "@/src/app/styles/color";
import { statusConfig } from "@/src/app/utils/statusConfig";

export function CardDashboard() {
  return (
    <section className="w-full grid grid-cols-5 gap-6 mt-4">
      {Object.entries(statusConfig).map(([status, config]) => {
        const Icon = config.icon;

        return (
          <Card key={status} className={`${config.text}`}>
            <CardContent className="flex flex-col gap-2 ">
              <Icon
                size={30}
                className={`${config.bg} ${config.text} p-1.5 rounded-sm `}
              />

              <p className={`text-2xl font-semibold ${color.textBranco}`}>0</p>

              <p className={`text-sm ${color.textTertiary}`}>{status}</p>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
