"use client";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { color } from "@/src/app/styles/color";
import { Cpu, Plus, Save, Settings } from "lucide-react";
import { SelectCategoria } from "./SelectCategoria";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
interface CreateTipoEquipamentoProps {
  categoria: string;
  tipo: string;
  tag: string;
}

export function CreateTipoEquipamento() {
  const [formData, setFormData] = useState<CreateTipoEquipamentoProps>({
    categoria: "",
    tipo: "",
    tag: "",
  });

  function handleCreateTipo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    setFormData({
      categoria: "",
      tipo: "",
      tag: "",
    });

    console.log(formData);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span
          className={`${color.textTertiary} text-xs hover:${color.textBranco} cursor-pointer flex items-center gap-1 hover:underline`}
        >
          <Plus size={18} /> Cadastrar Tipo
        </span>
      </DialogTrigger>

      <DialogContent
        onPointerDownOutside={(e) => e.preventDefault()}
        className=" border-slate-800 text-white ] overflow-hidden"
      >
        {/* Glow Decorativo de fundo */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[80px] pointer-events-none" />

        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Settings className="text-blue-400 animate-spin-slow" size={22} />
            Cadastrar Tipo Equipamento
          </DialogTitle>

          <DialogDescription className="text-slate-400">
            Adicione um novo tipo de equipamento.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-5 py-4 " onSubmit={handleCreateTipo}>
          <SelectCategoria
            titulo="Categoria"
            Icon={<Cpu size={18} />}
            value={formData.categoria}
            onChange={(v) => setFormData({ ...formData, categoria: v })}
          />

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2 ">
              <Label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                Tipo de Equipamento
              </Label>
              <Input
                className="bg-black/40 w-full border-slate-700 focus:border-blue-500 transition-all text-sm  "
                type="text"
                placeholder="ex: Gerador..."
                value={formData.tipo}
                onChange={(v) =>
                  setFormData({ ...formData, tipo: v.target.value })
                }
                required
              />
            </div>
            <div className="grid gap-2 ">
              <Label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                Tag
              </Label>
              <Input
                className="bg-black/40 w-full border-slate-700 focus:border-blue-500 transition-all text-sm uppercase "
                type="text"
                placeholder="ex: GE..."
                value={formData.tag}
                onChange={(v) =>
                  setFormData({ ...formData, tag: v.target.value })
                }
                required
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button variant={"ghost"} type="button">
                Cancelar
              </Button>
              <Button type="submit">
                <Save size={16} /> Cadastrar
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
