import { color } from "@/src/app/styles/color";
import { LiSidebar } from "./LiSidebar";
import { LiSidebarFooter } from "./LiSideBarFooter";
import Image from "next/image";
import IconLogo from "@/assets/iconLogo.png";
export function SideBar() {
  return (
    <header
      className={`${color.bgSideBar} w-55 max-h-screen ${color.textBranco} border-r border-gray-200/10`}
    >
      <div className="flex gap-3 items-center px-2 py-4 mt-2">
        <Image src={IconLogo} alt="logo" width={40} height={40} />

        <div className="flex flex-col  ">
          <span className="font-bold text-xl">Axion OS</span>
          <span className={`text-[10px] flex flex-wrap ${color.textTertiary}`}>
            Sistema de manutenção
          </span>
        </div>
      </div>
      <hr className="mx-2 text-gray-200/10" />
      <div className="flex flex-col justify-between h-[calc(100vh-110px)]">
        <LiSidebar />
        <LiSidebarFooter />
      </div>
    </header>
  );
}
