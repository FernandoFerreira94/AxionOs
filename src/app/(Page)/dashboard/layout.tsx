"use client";
import { SideBar } from "@/components/layoute/SideBar";
import { color } from "../../styles/color";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative w-full min-h-screen flex  max-sm:mb-10 ${color.bgMain} ${color.textBranco}`}
    >
      <SideBar />
      {children}
    </main>
  );
}
