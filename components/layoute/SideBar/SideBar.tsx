import { color } from "@/src/app/styles/color";
import { LiSidebar } from "./LiSidebar";
import { LiSidebarFooter } from "./LiSideBarFooter";
import Image from "next/image";
import IconLogo from "@/assets/iconLogo.png";
import { HamburgueSideBar } from "./HamburgueSideBarMobile";

export function SideBar() {
  return (
    <>
      <header
        className={`${color.bgSideBar} w-48 max-h-screen ${color.textBranco} border-r border-gray-200/10 fixed max-sm:hidden`}
      >
        <div className="flex gap-3 items-center px-2 py-4 mt-2">
          <Image src={IconLogo} alt="logo" width={40} height={40} />

          <div className="flex flex-col  ">
            <span className="font-bold text-xl">Axion OS</span>
            <span
              className={`text-[10px] flex flex-wrap ${color.textTertiary}`}
            >
              Sistema de manutenção
            </span>
          </div>
        </div>
        <hr className="mx-2 text-gray-200/10" />
        <div className="flex flex-col justify-between h-[calc(100vh-80px)] pb-8">
          <LiSidebar />
          <LiSidebarFooter />
        </div>
      </header>
      <header
        className={`hidden max-sm:flex  h-17 items-center px-6 rounded-b-lg w-full shadow-sm shadow-b shadow-gray-900 ${color.bgSideBar} `}
      >
        <div className="flex gap-6 items-center">
          <HamburgueSideBar />
          <div className="flex gap-2">
            <span>
              <Image src={IconLogo} alt="logo" width={35} height={35} />
            </span>
            <span className="font-bold text-xl">Axion OS</span>
          </div>
        </div>
      </header>
    </>
  );
}
