import { Card, CardContent } from "@/components/ui/card";
import { color } from "@/src/app/styles/color";
import { Clock } from "lucide-react";

export function MensagemPrevintavas() {
  return (
    <Card className={`${color.bgIconAzul} ${color.textIconAzul} mt-4`}>
      <CardContent>
        <div className="flex  gap-4">
          <span>
            {" "}
            <Clock
              size={30}
              className={`p-1.5 mt-1.5 rounded-sm ${color.bgIconAzul2} `}
            />
          </span>
          <div>
            <h1 className="text-base font-semibold text-blue-400">
              Sobre Manutenção Preventiva
            </h1>
            <p className={`text-sm text-blue-200 font-light`}>
              Os planos de manutenção preventiva ajudam a reduzir falhas nos
              equipamentos e prolongar a vida útil dos ativos. Execute os planos
              dentro do cronograma para manter as operações ideais do edifício.
              Você pode gerar ordens de serviço corretivas a partir de execuções
              preventivas quando problemas são descobertos.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
