import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import { CardPreventivas } from "./_componentesPreventive/CardInfoPreventivas";
import { FilterPreventivas } from "./_componentesPreventive/FilterPreventivas";
import SectionPreventivas from "./_componentesPreventive/SectionPreventivas";
import { MensagemPrevintavas } from "./_componentesPreventive/MensagemPrevintavas";

export default function Preventivas() {
  return (
    <main className="w-full h-screen flex flex-col px-8 pb-4 overflow-hidden">
      <HeaderDashboard
        titulo="Preventivas de equipamentos"
        subTitulo="Planos de manutenção programada e acompanhamento de execução"
      />
      <CardPreventivas />
      <FilterPreventivas />
      <SectionPreventivas />
      <MensagemPrevintavas />
    </main>
  );
}
