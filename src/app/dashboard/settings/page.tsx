"use client";

import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch"; // Se tiver esse componente Shadcn
import { color } from "../../styles/color";
import {
  LogOut,
  Settings2,
  ShieldCheck,
  Info,
  Database,
  ChevronRight,
} from "lucide-react";

export default function Settings() {
  const versionInfo = {
    app: "v2.4.0-stable",
    build: "2026.02.11",
    database: "PostgreSQL 15.4",
    node: "v20.10.0",
  };

  return (
    <main className="w-full min-h-screen flex flex-col px-8 pb-8 overflow-y-auto">
      <HeaderDashboard
        titulo="Configurações"
        subTitulo="Configure as definições, notificações e preferências de todo o sistema para a plataforma de manutenção do Axio OS."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* COLUNA 1: PREFERÊNCIAS E NOTIFICAÇÕES */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-gray-400/20 bg-white/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Settings2 size={20} className="text-blue-400" />
                <CardTitle className={`text-lg ${color.textBranco}`}>
                  Preferências do Sistema
                </CardTitle>
              </div>
              <CardDescription>
                Ajuste como o Axio OS se comporta no seu dispositivo.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className={`text-sm font-medium ${color.textBranco}`}>
                    Notificações Push
                  </p>
                  <p className="text-xs text-slate-500">
                    Receba alertas de preventivas atrasadas em tempo real.
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator className="bg-gray-400/10" />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className={`text-sm font-medium ${color.textBranco}`}>
                    Modo Offline
                  </p>
                  <p className="text-xs text-slate-500">
                    Sincronizar dados para leitura em locais sem sinal
                    (docas/subsolos).
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-400/20 bg-white/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-emerald-400" />
                <CardTitle className={`text-lg ${color.textBranco}`}>
                  Segurança
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-between border-gray-400/20 hover:bg-white/5 text-slate-300"
              >
                Alterar senha de acesso
                <ChevronRight size={16} />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* COLUNA 2: SOBRE E LOGOUT */}
        <div className="space-y-6">
          {/* Card Sobre o Software */}
          <Card className="border-gray-400/20 bg-white/5 overflow-hidden">
            <div className={`h-1 w-full ${color.bgIconAzul}`} />
            <CardHeader>
              <div className="flex items-center gap-2">
                <Info size={20} className="text-blue-400" />
                <CardTitle className={`text-lg ${color.textBranco}`}>
                  Sobre o Sistema
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 uppercase font-bold">
                    Versão
                  </span>
                  <span className="text-blue-300 font-mono">
                    {versionInfo.app}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 uppercase font-bold">
                    Última Build
                  </span>
                  <span className={`${color.textBranco} font-mono`}>
                    {versionInfo.build}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 uppercase font-bold">
                    Engine
                  </span>
                  <span className="text-slate-300">Next.js 14 / Tailwind</span>
                </div>
              </div>

              <div className="bg-[#0a0a0a] rounded-lg p-3 mt-4 flex items-center gap-3 border border-gray-400/10">
                <Database size={18} className="text-slate-600" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">
                    Conexão DB
                  </span>
                  <span className="text-[11px] text-emerald-500 font-mono">
                    Status: Conectado
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card de Sessão / Logout */}
          <Card className="border-red-500/20 bg-red-500/5">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-red-400">
                    Encerrar Sessão
                  </h4>
                  <p className="text-xs text-slate-500">
                    Ao deslogar, você precisará de suas credenciais novamente
                    para acessar o Axio OS.
                  </p>
                </div>
                <Button
                  variant="destructive"
                  className="w-full flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors"
                  onClick={() => console.log("Deslogando...")}
                >
                  <LogOut size={16} />
                  Sair da Conta
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
