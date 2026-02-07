"use client";
import { SideBar } from "@/components/layoute/SideBar/SideBar";
import { color } from "../styles/color";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main
        className={`relative w-full min-h-screen flex max-sm:flex-col  ${color.bgMain} ${color.textBranco}`}
      >
        <SideBar />
        <section className="w-full ml-48 max-sm:ml-0 ">{children}</section>
      </main>
    </>
  );
}
