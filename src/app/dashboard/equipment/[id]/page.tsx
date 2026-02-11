"use client";

import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeStatus } from "@/components/layoute/BadgeStatus"; // Ajuste o path
import { BadgeFuncao } from "@/components/layoute/BadgeFuncao";
import { color } from "@/src/app/styles/color";
import {
  Settings,
  MapPin,
  Calendar,
  User,
  History,
  Clock,
  FileText,
  Activity,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatarData } from "@/src/app/actions/formatarData";
import { calcularDiasRestantes } from "@/src/app/actions/calculaDiasRestantes";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

// Mock de dados do equipamento (O que viria pelo ID)
const equipData = {
  id: "1",
  tag: "CH-01",
  nome: "Chiller 01",
  local: "CAG",
  categoria: "Refrigeração" as const,
  modelo: "Carrier 30XA",
  status: true,
  dataPreventiva: new Date(2026, 5, 30), // Próxima data
};

// Mock de histórico de preventivas realizadas
const historicoPreventivas = [
  {
    id: "os-101",
    dataFinalizada: new Date(2025, 11, 15),
    tecnico: "Eduardo Perotti",
    descricao: "Limpeza dos condensadores e verificação de carga de gás.",
    status: "Concluído",
  },
  {
    id: "os-88",
    dataFinalizada: new Date(2025, 10, 10),
    tecnico: "Marcos Silva",
    descricao: "Substituição de filtros e lubrificação de motores.",
    status: "Concluído",
  },
];

export default function EquipmentPage() {
  // Lógica para dias restantes
  const diasRestantes = calcularDiasRestantes(equipData.dataPreventiva);

  const getStatusCor = (dias: number | null) => {
    if (dias === null) return "text-slate-500";
    if (dias < 0) return "text-red-600 font-bold animate-pulse"; // Vencida
    if (dias <= 7) return "text-orange-500 font-bold"; // Alerta (menos de uma semana)
    return "text-emerald-400"; // Tranquilo
  };

  const router = useRouter();

  return (
    <main className="w-full min-h-screen flex flex-col px-8 max-sm:px-4 pb-8 overflow-y-auto">
      <HeaderDashboard
        titulo={`${equipData.tag} - ${equipData.nome}`}
        subTitulo={`Localização: ${equipData.local}`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* COLUNA 1: DETALHES TÉCNICOS */}
        <div className="lg:col-span-1 space-y-6">
          <Card
            className={`border-gray-400/20 ${color.bgCard} ${color.textBranco} `}
          >
            <CardHeader className="border-b border-gray-400/10">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <Settings size={18} className="text-blue-400" />
                Especificações do Ativo
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500 uppercase font-bold">
                  Status Operacional
                </span>
                <Badge
                  variant={"default"}
                  className={
                    equipData.status
                      ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
                      : "text-slate-500 bg-slate-500/10 border-slate-500/20"
                  }
                >
                  {equipData.status ? "Ativo" : "Desativado"}
                </Badge>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500 uppercase font-bold">
                  Categoria
                </span>
                <BadgeFuncao funcao={equipData.categoria} />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-slate-500 uppercase font-bold">
                  Modelo / Fabricante
                </span>
                <p className={`text-sm ${color.textBranco} font-medium`}>
                  {equipData.modelo}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-slate-500 uppercase font-bold">
                  Local Instalação
                </span>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <MapPin size={14} className="text-blue-500" />
                  {equipData.local}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CARD DE PRÓXIMA MANUTENÇÃO */}
          <Card className="border-blue-500/30 bg-blue-500/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-lg ${diasRestantes !== null && diasRestantes < 0 ? "bg-red-500/20 text-red-400" : "bg-blue-500/20 text-blue-400"}`}
                >
                  <Calendar size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Próxima Preventiva
                  </p>
                  <h3 className={`text-xl font-bold ${color.textBranco}`}>
                    {formatarData(equipData.dataPreventiva)}
                  </h3>
                  <p
                    className={`text-xs mt-1 flex items-center gap-1 ${getStatusCor(diasRestantes)}`}
                  >
                    {diasRestantes === null
                      ? "Sem agendamento"
                      : diasRestantes < 0
                        ? `Vencida há ${Math.abs(diasRestantes)} dias`
                        : diasRestantes === 0
                          ? "É HOJE!"
                          : `Faltam ${diasRestantes} dias`}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* COLUNA 2: HISTÓRICO DE PREVENTIVAS */}
        <div className="lg:col-span-2">
          <Card
            className={`border-gray-400/20 h-full ${color.bgCard} ${color.textBranco} `}
          >
            <CardHeader className="flex flex-row items-center justify-between border-b border-gray-400/10">
              <div className="space-y-1">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <History size={18} className="text-amber-400" />
                  Histórico de Intervenções
                </CardTitle>
              </div>
              <Activity size={16} className="text-slate-600" />
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-400/10 hover:bg-transparent">
                    <TableHead className="text-[10px] uppercase">
                      Data / Técnico
                    </TableHead>
                    <TableHead className="text-[10px] uppercase">
                      Descrição do Serviço
                    </TableHead>
                    <TableHead className="text-right text-[10px] uppercase">
                      OS Ref
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {historicoPreventivas.map((prev) => (
                    <TableRow
                      key={prev.id}
                      className="border-gray-400/5 hover:bg-white/5 transition-colors"
                      onClick={() =>
                        router.push(`/dashboard/service-orders/${prev.id}`)
                      }
                    >
                      <TableCell className="py-4">
                        <div className="flex flex-col gap-1">
                          <span
                            className={`text-sm font-medium ${color.textBranco}`}
                          >
                            {formatarData(prev.dataFinalizada)}
                          </span>
                          <span className="flex items-center gap-1 text-[11px] text-slate-500">
                            <User size={10} /> {prev.tecnico}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-xs text-slate-400 max-w-[300px] line-clamp-2 italic">
                          {prev.descricao}
                        </p>
                      </TableCell>
                      <TableCell className="text-right">
                        <span className="text-[11px] font-mono bg-white/5 px-2 py-1 rounded text-slate-300">
                          #{prev.id}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {historicoPreventivas.length === 0 && (
                <div className="p-10 text-center text-slate-500 text-sm">
                  Nenhuma preventiva realizada anteriormente.
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
