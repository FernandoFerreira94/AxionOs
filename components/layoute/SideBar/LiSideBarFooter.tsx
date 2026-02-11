import { color } from "@/src/app/styles/color";
import { Settings, UserCog, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { BadgeIniciais } from "@/src/app/actions/BadgeIniciais";

export function LiSidebarFooter() {
  const pathname = usePathname();
  const listaLink = {
    url: "/settings",
    icon: <Settings size={18} />,
    link: "Configurações",
  };

  return (
    <>
      <ul className="px-2  flex flex-col gap-1.5 max-sm:gap-0 ">
        <hr className="mx-2 text-gray-200/10 mb-2" />

        <li className=" flex  gap-2 px-2">
          {" "}
          <BadgeIniciais nomeCompleto="Eduardo Perotti" />{" "}
          <div className="flex justify-center flex-col  ">
            <span className="text-sm  font-semibold">Eduardo Perrote</span>
            <span className="text-[11px] text-slate-500 ">
              Tecnico Refrigeração
            </span>
          </div>
        </li>
        <li>
          <Link
            href={listaLink.url}
            className={`flex items-center gap-2  px-4 py-2 rounded-sm  text-sm transition duration-300 ${pathname === listaLink.url ? color.bgLiSideBarActive : color.bgLiSidebarDisabled}`}
          >
            {listaLink.icon} {listaLink.link}
          </Link>
        </li>

        <Button
          className={`${color.textIconVermelho} bg-[#271D2A] border max-sm:mt-2 hover:bg-[#3A2B44] mt-1 `}
          onClick={() => redirect("/")}
        >
          <LogOut size={18} /> Sair
        </Button>
      </ul>
    </>
  );
}
