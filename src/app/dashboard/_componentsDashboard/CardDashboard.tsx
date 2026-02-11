import { Card, CardContent } from "@/components/ui/card";
import { color } from "@/src/app/styles/color";
import { statusConfig } from "@/src/app/utils/statusConfig";

export function CardDashboard() {
  return (
    <section className="w-full grid grid-cols-5 gap-6 max-sm:gap-2 mt-4 max-sm:mt-0 max-sm:grid-cols-2 ">
      {Object.entries(statusConfig).map(([status, config]) => {
        const Icon = config.icon;

        return (
          <Card key={status} className={`${config.text} max-sm:py-4`}>
            <CardContent className="flex flex-col gap-2 max-sm:justify-between">
              <div className="flex items-center gap-2">
                <Icon
                  size={30}
                  className={`${config.bg} ${config.text} p-1.5 rounded-sm `}
                />
                <p className={`text-sm ${color.textTertiary}`}>{status}</p>
              </div>

              <p
                className={`text-2xl font-semibold max-sm:text-xl ${color.textBranco}`}
              >
                0
              </p>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
