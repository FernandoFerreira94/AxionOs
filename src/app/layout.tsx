import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./Provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Axio OS | Gestão Inteligente de Manutenção",
    template: "%s | Axio OS",
  },
  description:
    "Plataforma avançada para controle de ordens de serviço, gerenciamento de estoque e monitoramento de equipes em tempo real.",
  keywords: [
    "gestão de manutenção",
    "ordem de serviço",
    "controle de estoque",
    "manutenção predial",
    "Axio OS",
    "software ERP",
  ],
  authors: [{ name: "Axio OS Team" }],
  creator: "Axio OS",
  publisher: "Axio OS",
  icons: {
    icon: "/favicon.ico", // Certifique-se de ter um ícone na pasta public
    apple: "/apple-touch-icon.png",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
