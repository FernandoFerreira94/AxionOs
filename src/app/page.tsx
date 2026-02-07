"use client";
import { useState } from "react";
import { Particles } from "@/components/ui/particles";
import { color } from "./styles/color";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Logo from "@/assets/iconLogo.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <main
      className={`w-full min-h-screen flex items-center justify-center ${color.bgMain}`}
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
      />
      <div className=" container mx-auto w-full flex items-center justify-center max-sm:px-4">
        <Card className={`bg-[#111827]/80 w-1/3 z-10 max-sm:w-12/12`}>
          <CardContent>
            <div className="max-sm:flex-col flex items-center justify-center gap-4">
              <Image
                src={Logo}
                alt="logo"
                width={100}
                height={100}
                priority
                className="max-sm:w-3/10"
              />
              <div className="flex flex-col ">
                <h1
                  className={`font-semibold text-6xl max-sm:text-4xl max-sm:text-center ${color.textBranco} `}
                >
                  Axion OS
                </h1>
                <span className={`text-base ${color.textTertiary} italic`}>
                  Sistema de manutenção e preventivas
                </span>
              </div>
            </div>

            <CardHeader className=" mt-4 text-center">
              <CardTitle className={`${color.textBranco} text-xl`}>
                Acessar
              </CardTitle>
            </CardHeader>
            <CardDescription
              className={`flex flex-col gap-4 ${color.textSecondary}`}
            >
              <div className="flex flex-col gap-2">
                <Label htmlFor="matricula">Matricula</Label>
                <Input id="matricula" placeholder="Digite sua matricula" />
              </div>
              <div className="flex flex-col gap-2 ">
                <Label htmlFor="senha">Senha</Label>
                <div className="relative">
                  <Input
                    id="senha"
                    placeholder="Digite sua senha"
                    type={showPassword ? "password" : "text"}
                  />
                  {showPassword ? (
                    <EyeClosed
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <Eye
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
              </div>
              <Button className="p-0 ">
                <Link
                  href="/dashboard"
                  className=" h-full w-full flex items-center justify-center"
                >
                  Entrar
                </Link>
              </Button>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
