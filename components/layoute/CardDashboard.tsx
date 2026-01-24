import { ClipboardList, Wrench, PackageX, Search } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { color } from "@/src/app/styles/color";

export function CardDashboard() {
  const listCard = [
    {
      status: "Aberto",
      colorText: color.textIconAmarelo,
      bg: color.bgIconAmarelo,
      icon: ClipboardList,
    },
    {
      status: "Em Execução",
      colorText: color.textIconAzul,
      bg: color.bgIconAzul,
      icon: Wrench,
    },
    {
      status: "Aguardando Material",
      colorText: color.textIconMarron,
      bg: color.bgIconMarron,
      icon: PackageX,
    },
    {
      status: "Aguardando Fiscalização",
      colorText: color.textIconLilas,
      bg: color.bgIconLilas,
      icon: Search,
    },
    {
      status: "Finalizado",
      colorText: color.textIconVerde,
      bg: color.bgIconVerde,
      icon: Wrench,
    },
  ];

  return (
    <section className="w-full  grid grid-cols-5 gap-6 mt-8">
      {listCard.map((item) => (
        <Card key={item.status} className={` ${item.colorText}`}>
          <CardContent className="flex flex-col gap-2">
            <item.icon size={30} className={`${item.bg} p-1.5 rounded-sm`} />
            <p className={`text-2xl font-semibold ${color.textBranco}`}>0</p>
            <p className={`text-sm ${color.textTertiary}`}>{item.status}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
