import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CardServiceOrdenFilter from "./componentsServiceOrdes/CardServiceOrdenFilter";
import { CardOrdemService } from "./componentsServiceOrdes/CardOrdemService";

export default function ServiceOrderm() {
  return (
    <main className={` w-full min-h-screen  px-8 `}>
      <HeaderDashboard
        titulo="Ordens de serviço"
        subTitulo="Gerenciar ordens de serviço de manutenção"
        component={
          <Button>
            <Plus /> Criar OS
          </Button>
        }
      />
      <CardServiceOrdenFilter />
      <CardOrdemService />
    </main>
  );
}
