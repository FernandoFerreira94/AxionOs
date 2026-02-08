import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { color } from "@/src/app/styles/color";
import {
  BarChart3,
  CalendarCheck,
  ClipboardList,
  Clock,
  LayoutDashboard,
  Package,
  TextAlignJustify,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import IconLogo from "@/assets/iconLogo.png";
import { LiSidebarFooter } from "./LiSideBarFooter";
import { usePathname } from "next/navigation";
import Link from "next/link";
const listaLink = [
  {
    url: "/dashboard",
    icon: <LayoutDashboard size={18} />,
    link: "Dashboard",
  },
  {
    url: "/dashboard/service-orders",
    icon: <ClipboardList size={18} />,
    link: "Ordem de serviço",
  },
  {
    url: "/dashboard/preventive",
    icon: <CalendarCheck size={18} />,
    link: "Preventivas",
  },
  {
    url: "/dashboard/equipment",
    icon: <Wrench size={18} />,
    link: "Equipamentos",
  },
  {
    url: "/dashboard/materials",
    icon: <Package size={18} />,
    link: "Materiais",
  },
  {
    url: "/dashboard/employees",
    icon: <Users size={18} />,
    link: "Funcionários",
  },

  {
    url: "/dashboard/shifts",
    icon: <Clock size={18} />,
    link: "Plantões",
  },
  {
    url: "/dashboard/reports",
    icon: <BarChart3 size={18} />,
    link: "Relatórios",
  },
];
export function HamburgueSideBar() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <TextAlignJustify size={22} />
      </SheetTrigger>
      <SheetContent
        side="left"
        className={` ${color.bgSideBar} ${color.textBranco} border-r border-gray-400/40  p-2`}
      >
        <SheetHeader className="border-b border-gray-400/40">
          <SheetTitle>
            <div className="flex gap-2">
              <span>
                <Image src={IconLogo} alt="logo" width={35} height={35} />
              </span>
              <span className={`font-bold text-xl ${color.textBranco}`}>
                Axion OS
              </span>
            </div>
          </SheetTitle>
          <SheetDescription>
            <span className={`text-sm flex flex-wrap ${color.textTertiary}`}>
              Sistema de manutenção
            </span>
          </SheetDescription>
        </SheetHeader>

<div className="flex flex-col gap-0">

        {listaLink.map((item) => (
          <SheetClose asChild key={item.url} >
            <Link
              href={item.url}
              className={`flex items-center gap-2  px-4 py-2  rounded-sm  text-sm transition duration-300 ${pathname === item.url ? color.bgLiSideBarActive : color.bgLiSidebarDisabled}`}
              >
              {item.icon} {item.link}
            </Link>
          </SheetClose>
        ))}
        </div>

        <SheetFooter className="p-0">
          <LiSidebarFooter />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
