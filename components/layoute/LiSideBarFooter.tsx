import { color } from "@/src/app/styles/color";
import { Settings, UserCog, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export function LiSidebarFooter() {
  const pathname = usePathname();
  const listaLink = [
    {
      url: "/users",
      icon: <UserCog size={18} />,
      link: "Usuários",
    },
    {
      url: "/settings",
      icon: <Settings size={18} />,
      link: "Configurações",
    },
  ];
  console.log(pathname);
  return (
    <>
      <ul className="px-2  flex flex-col gap-1.5 ">
        <hr className="mx-2 text-gray-200/10 mb-2" />
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
        <Button
          className={`${color.textIconVermelho} bg-[#271D2A] border hover:bg-[#3A2B44] mt-1 `}
        >
          <LogOut size={18} /> Sair
        </Button>
      </ul>
    </>
  );
}
