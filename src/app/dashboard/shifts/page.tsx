import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import { CardShifts } from "./_componentsShifts/CardShift";
import { MensagemPlantoes } from "./_componentsShifts/CardMensagemFooter";

export default function Plantoes() {
  return (
    <main className="w-full h-screen flex flex-col px-8 pb-4 overflow-hidden">
      <HeaderDashboard
        titulo="Turnos"
        subTitulo="Horários de trabalho da equipe de manutenção"
      />
      <CardShifts />
      <MensagemPlantoes />
    </main>
  );
}
