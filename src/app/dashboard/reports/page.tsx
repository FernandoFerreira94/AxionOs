import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { CardMonth } from "./_componetnesReports/CardMonth";
import { GraficoColuna } from "./_componetnesReports/GraficoColuna";
import { GraficoPizza } from "./_componetnesReports/GraficoPizza";
import { GraficoFuncionarios } from "./_componetnesReports/GraficoFuncionarios";
import { CardStatusOS } from "./_componetnesReports/CardStatusOS";
export default function Reports() {
  return (
    <main className="w-full min-h-screen flex flex-col px-8 pb-4 overflow-hidden">
      <HeaderDashboard
        titulo="Relatorios"
        subTitulo="Análises e insights de manutenção mensal"
        /* component={
          <Button>
            <Download />
            Exporta PDF
          </Button>
        }
          */
      />
      <CardMonth />
      <CardStatusOS />
      <div className="grid grid-cols-2 gap-6 mt-6">
        <GraficoColuna />
        <GraficoPizza />
      </div>
      <div className="mb-6">
        <GraficoFuncionarios />
      </div>
    </main>
  );
}
