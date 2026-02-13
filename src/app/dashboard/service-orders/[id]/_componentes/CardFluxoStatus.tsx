import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatarData } from "@/src/app/actions/formatarData";
import { Calendar, User } from "lucide-react";

interface CardFluxoInformacaoProps {
  dataAbertura: Date;
  dataFechamento?: Date;
  tecnico: string;
  status: string;
}

export function CardFluxoInformacao({
  dataAbertura,
  dataFechamento,
  tecnico,
  status,
}: CardFluxoInformacaoProps) {
  return (
    <Card className="border-gray-400/20 bg-white/5">
      <CardHeader>
        <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-widest">
          Informações de Fluxo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] text-slate-500 font-bold uppercase">
            Status Atual
          </span>
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            {status}
          </div>
        </div>
        <Separator className="bg-gray-400/10" />
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Calendar size={16} className="text-blue-500 mt-1" />
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 font-bold uppercase">
                Abertura
              </span>
              <span className="text-xs text-slate-200">
                {formatarData(dataAbertura)}
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <User size={16} className="text-slate-500 mt-1" />
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 font-bold uppercase">
                Técnico Responsável
              </span>
              <span className="text-xs text-slate-200 font-medium">
                {tecnico}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
