import { Card, CardContent } from "@/components/ui/card";
import { color } from "@/src/app/styles/color";
import { Clock } from "lucide-react";

export function MensagemPlantoes() {
  return (
    <Card className={`${color.bgIconAzul} ${color.textIconAzul} mt-auto`}>
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
              Sobre os Plantões
            </h1>
            <p className={`text-sm text-blue-200 font-light`}>
              Os turnos ajudam a organizar as atividades de manutenção ao longo
              do dia. Ao criar ordens de serviço, você pode especificar qual
              turno deverá realizar o trabalho. As atividades podem ser
              transferidas entre turnos usando o status Aguardando próximo
              turno.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
