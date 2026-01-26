import { color } from "@/src/app/styles/color";
import {
  LayoutDashboard,
  ClipboardList,
  CalendarCheck,
  BarChart3,
  Users,
  Package,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LiSidebar() {
  const pathname = usePathname();
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
      icon: <Package size={18} />,
      link: "Equipamentos",
    },
    {
      url: "/dashboard/employees",
      icon: <Users size={18} />,
      link: "Funcionários",
    },

    {
      url: "/dashboard/shifts",
      icon: <ClipboardList size={18} />,
      link: "Plantões",
    },
    {
      url: "/dashboard/reports",
      icon: <BarChart3 size={18} />,
      link: "Relatórios",
    },
  ];
  return (
    <ul className="px-2 mt-4 flex flex-col gap-1.5">
      {listaLink.map((item) => (
        <li key={item.url}>
          <Link
            href={item.url}
            className={`flex items-center gap-2  px-4 py-2 rounded-sm  text-sm transition duration-300 ${pathname === item.url ? color.bgLiSideBarActive : color.bgLiSidebarDisabled}`}
          >
            {item.icon} {item.link}
          </Link>
        </li>
      ))}
    </ul>
  );
}
