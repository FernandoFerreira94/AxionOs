import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import { CardDashboard } from "@/src/app/(Page)/dashboard/_componentsDashboard/CardDashboard";
import { FilterOrdem } from "@/components/layoute/FilterOrdem";
import SectionPreventivas from "@/src/app/(Page)/dashboard/_componentsDashboard/SectionDashboardPreventivas";
import SectionAtividades from "@/src/app/(Page)/dashboard/_componentsDashboard/SectionDashboardAtividades";

export default function dashboard() {
  return (
    <main className={` w-full min-h-screen  pr-4  pl-8`}>
      <HeaderDashboard
        titulo="Dashboard"
        subTitulo="Visão geral das operações de manutenção"
      />
      <CardDashboard />
      <FilterOrdem />
      <section className="mt-6 grid grid-cols-5 gap-4 mb-20">
        <div className="col-span-3">
          <SectionPreventivas />
        </div>

        <div className="col-span-2">
          <SectionAtividades />
        </div>
      </section>
    </main>
  );
}
