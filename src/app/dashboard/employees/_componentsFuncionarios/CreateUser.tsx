"use client";

import { useState } from "react";
import {
  UserPlus,
  User,
  Hash,
  ShieldCheck,
  Briefcase,
  Lock,
  Box,
  CheckCircle2,
  Eye,
  EyeOff,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch"; // Usando Switch para booleanos
import { toast } from "sonner";

export interface UserProps {
  nome_completo: string;
  matricula: string;
  password_hash: string;
  funcao: string;
  is_adm: boolean;
  is_almoxerifado: boolean;
}

export function CreateUserDialog() {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<UserProps>({
    nome_completo: "",
    matricula: "",
    password_hash: "",
    funcao: "",
    is_adm: false,
    is_almoxerifado: false,
  });

  const handleSave = () => {
    // Validação simples
    if (
      !formData.nome_completo ||
      !formData.matricula ||
      !formData.password_hash
    ) {
      toast.error("Preencha o nome, matrícula e senha inicial.");
      return;
    }

    console.log("Criando Usuário:", formData);
    toast.success(`Usuário ${formData.nome_completo} criado com sucesso!`);

    // Reset e fechar
    setFormData({
      nome_completo: "",
      matricula: "",
      password_hash: "",
      funcao: "",
      is_adm: false,
      is_almoxerifado: false,
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className=" text-white gap-2 shadow-lg shadow-indigo-900/20">
          <UserPlus size={18} /> Cadastrar Funcionario
        </Button>
      </DialogTrigger>

      <DialogContent className=" border-slate-800 text-white sm:max-w-[450px] overflow-hidden">
        {/* Glow de fundo roxo/indigo para diferenciar de Equipamentos */}

        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <User className="text-slate-400" size={22} />
            Cadastrar Usuário
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Crie as credenciais de acesso para um novo colaborador.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-5 py-4">
          {/* Nome Completo */}
          <div className="grid gap-2">
            <Label
              htmlFor="nome"
              className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"
            >
              <User size={12} /> Nome Completo
            </Label>
            <Input
              id="nome"
              placeholder="Ex: João Silva Sauro"
              className="bg-black/40 border-slate-700 focus:border-indigo-500 text-sm"
              value={formData.nome_completo}
              onChange={(e) =>
                setFormData({ ...formData, nome_completo: e.target.value })
              }
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Matrícula */}
            <div className="grid gap-2">
              <Label
                htmlFor="matricula"
                className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"
              >
                <Hash size={12} /> Matrícula (Login)
              </Label>
              <Input
                id="matricula"
                placeholder="002345"
                className="bg-black/40 border-slate-700 focus:border-indigo-500 text-sm"
                value={formData.matricula}
                onChange={(e) =>
                  setFormData({ ...formData, matricula: e.target.value })
                }
                required
              />
            </div>
            {/* Senha (CPF) */}
            <div className="grid gap-2">
              <Label
                htmlFor="pass"
                className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1"
              >
                <Lock size={12} /> Senha (6 Dig. CPF)
              </Label>
              <div className="relative">
                <Input
                  id="pass"
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  maxLength={6}
                  className="bg-black/40 border-slate-700 focus:border-indigo-500 text-sm"
                  value={formData.password_hash}
                  onChange={(e) =>
                    setFormData({ ...formData, password_hash: e.target.value })
                  }
                  required
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-white"
                >
                  {showPassword ? <Eye size={14} /> : <EyeOff size={14} />}
                </button>
              </div>
            </div>
          </div>

          {/* Função */}
          <div className="grid gap-2">
            <Label
              htmlFor="funcao"
              className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"
            >
              <Briefcase size={12} /> Função / Cargo
            </Label>
            <Select
              onValueChange={(e) => setFormData({ ...formData, funcao: e })}
              required // CHAMA A FUNÇÃO DE FILTRO AQUI
            >
              <SelectTrigger className="bg-black/40 border-slate-700 text-sm w-full">
                <SelectValue placeholder="Selecione o cargo..." />
              </SelectTrigger>
              <SelectContent className=" border-slate-700 text-white z-[100] w-full">
                <SelectItem value="eletricista">Eletricista - M5</SelectItem>
                <SelectItem value="refrigeracao">
                  Tecnico Refrigereção - M6
                </SelectItem>
                <SelectItem value="lider">Líder - M7</SelectItem>
                <SelectItem value="oficial_geral">
                  Oficial Geral - M4
                </SelectItem>
                <SelectItem value="supervidor">Supevisor - M2</SelectItem>
                <SelectItem value="almoxarifado">Almoxarifado</SelectItem>
                <SelectItem value="coordenador">Coordenador</SelectItem>
                <SelectItem value="gerente">Gerente</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <hr className="border-slate-800" />

          {/* Permissões */}
          <div className="space-y-4">
            <Label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
              Nível de Acesso
            </Label>

            <div className="flex items-center justify-between p-3 rounded-lg bg-black/60 border border-slate-800/50 hover:border-indigo-500/30 transition-colors">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-md ${formData.is_adm ? "bg-indigo-500/20 text-indigo-400" : "bg-slate-800 text-slate-500"}`}
                >
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">Administrador</p>
                  <p className="text-[10px] text-slate-500">
                    Acesso total ao sistema e relatórios
                  </p>
                </div>
              </div>
              <Switch
                checked={formData.is_adm}
                onCheckedChange={(val) =>
                  setFormData({ ...formData, is_adm: val })
                }
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-black/60 border border-slate-800/50 hover:border-blue-500/30 transition-colors">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-md ${formData.is_almoxerifado ? "bg-blue-500/20 text-blue-400" : "bg-slate-800 text-slate-500"}`}
                >
                  <Box size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">Almoxarifado</p>
                  <p className="text-[10px] text-slate-500">
                    Gestão de materiais e estoque
                  </p>
                </div>
              </div>
              <Switch
                checked={formData.is_almoxerifado}
                onCheckedChange={(val) =>
                  setFormData({ ...formData, is_almoxerifado: val })
                }
              />
            </div>
          </div>
        </div>

        <DialogFooter className="border-t border-slate-800 pt-4 mt-2">
          <Button
            variant="ghost"
            onClick={() => setOpen(false)}
            className="text-slate-400 hover:text-white hover:bg-white/5"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSave}
            className=" text-white gap-2 px-6 shadow-md shadow-indigo-500/10"
          >
            <CheckCircle2 size={16} /> Salvar Usuário
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
