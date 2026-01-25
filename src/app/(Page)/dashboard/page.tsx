import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import { CardDashboard } from "@/components/layoute/CardDashboard";
import { FilterOrdem } from "@/components/layoute/FilterOrdem";
import SectionPreventivas from "@/components/layoute/SectionPreventivas";
import SectionAtividades from "@/components/layoute/SectionAtividades";

export default function dashboard() {
  return (
    <main className={` w-full min-h-screen  px-8 `}>
      <HeaderDashboard
        titulo="Dashboard"
        subTitulo="Visão geral das operações de manutenção"
      />
      <CardDashboard />
      <FilterOrdem />
   <section className="mt-6 grid grid-cols-3 gap-6">
  <div className="col-span-2">
    <SectionPreventivas />
  </div>

  <div className="col-span-1">
    <SectionAtividades />
  </div>
</section>
    </main>
  );
}
