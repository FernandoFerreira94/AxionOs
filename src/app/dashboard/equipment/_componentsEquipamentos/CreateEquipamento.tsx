"use client";

import { useState } from "react";
import {
  Settings,
  Tag as TagIcon,
  MapPin,
  Factory,
  Cpu,
  FileText,
  Plus,
  Save,
  Camera,
} from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import Image from "next/image";
import { generateNextTag } from "../_actions/genereteNextTag";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CreateTipoEquipamento } from "./CreateTipoEquipamento";
import { SelectCategoria } from "./SelectCategoria";

// Tipagem baseada na sua tabela
export interface EquipamentoProps {
  tag: string;
  file: File | null;
  nome: string;
  categoria: string;
  modelo: string;
  fabricante: string;
  local_instalacao: string;
  descricao: string;
}

const tipo = {
  eletrico: [
    { nome: "Painel eletrico", tag: "PE" },
    { nome: "Gerador Shopping", tag: "GE" },
    {
      nome: "Quadro Eletrico",
      tag: "QE",
    },
    { nome: "Bomba", tag: "BM" },
  ],
  refrigeracao: [
    { nome: "Ar-condicionado", tag: "AR" },
    { nome: "Chiller", tag: "CH" },
    {
      nome: "Fan Col",
      tag: "FC",
    },
    { nome: "Bomba", tag: "BM" },
  ],
};

export function CreateEquipamentoDialog() {
  const [formData, setFormData] = useState<EquipamentoProps>({
    tag: "",
    nome: "",
    file: null,
    categoria: "",
    modelo: "",
    fabricante: "",
    local_instalacao: "",
    descricao: "",
  });

  const handleSave = () => {
    if (!formData.tag || !formData.nome) {
      toast.error("Preencha ao menos a TAG e o Nome do equipamento!");
      return;
    }

    console.log("Salvando Equipamento:", formData);
    toast.success(`Equipamento ${formData.tag} cadastrado!`);

    // Limpar e fechar
    setFormData({
      tag: "",
      nome: "",
      categoria: "",
      file: null,
      modelo: "",
      fabricante: "",
      local_instalacao: "",
      descricao: "",
    });
  };

  // 3. Função para lidar com a mudança do Código
  const handleCodChange = (newCod: string) => {
    const proximoSequencial = generateNextTag(newCod, []);
    console.log(newCod);
    setFormData({
      ...formData,
      tag: ` ${newCod} - ${proximoSequencial}`,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFormData((prev) => ({
        ...prev,
        file: files[0],
      }));
    }
  };

  function handleSalve(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("dsd");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 shadow-lg shadow-blue-900/20">
          <Plus size={18} /> Novo Equipamento
        </Button>
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
            Cadastrar Novo Ativo
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Adicione um novo equipamento à planta para gestão de manutenção.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(100vh-250px)] pr-4">
          <form className="grid gap-5 py-4 " onSubmit={handleSalve}>
            <div className="grid grid-cols-2 gap-4">
              <SelectCategoria
                value={formData.categoria}
                onChange={(e) => setFormData({ ...formData, categoria: e })}
                titulo="Categoria"
                Icon={<Cpu size={12} />}
              />
              <div className="  relative ">
                <div className="grid gap-2">
                  <Label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Cpu size={12} /> Tipo
                  </Label>

                  <Select
                    onValueChange={handleCodChange}
                    required // CHAMA A FUNÇÃO DE FILTRO AQUI
                  >
                    <SelectTrigger className=" text-sm w-full">
                      <SelectValue placeholder="Selecione modelo..." />
                    </SelectTrigger>
                    <SelectContent className=" border-slate-700 text-white z-[100] w-full">
                      {formData.categoria === "refrigeracao" && (
                        <>
                          {tipo.refrigeracao.map((item, index) => (
                            <SelectItem key={index} value={item.tag}>
                              {item.nome}
                            </SelectItem>
                          ))}
                        </>
                      )}
                      {formData.categoria === "eletrico" && (
                        <>
                          {tipo.eletrico.map((item, index) => (
                            <SelectItem key={index} value={item.tag}>
                              {item.nome}
                            </SelectItem>
                          ))}
                        </>
                      )}
                      <SelectItem value="OU">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="absolute -bottom-6 right-2">
                  <CreateTipoEquipamento />
                </div>
              </div>
            </div>
            <div className="grid gap-2 ">
              <Label
                htmlFor="tag"
                className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1"
              >
                <TagIcon size={12} /> TAG Única
              </Label>
              <div className=" flex gap-2">
                <Input
                  id="cod"
                  placeholder="GE-01"
                  className="bg-black/40 w-full border-slate-700 focus:border-blue-500 transition-all text-sm uppercase "
                  value={formData.tag}
                  onChange={() => ""}
                />
              </div>
            </div>
            {/* Categoria e Local */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label
                  htmlFor="nome"
                  className="text-xs font-bold text-slate-400 uppercase tracking-wider"
                >
                  Nome do Equipamento
                </Label>
                <Input
                  id="nome"
                  placeholder="Ex: Compressor Central"
                  className="bg-black/40 border-slate-700 focus:border-blue-500 text-sm"
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label
                  htmlFor="local"
                  className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"
                >
                  <MapPin size={12} /> Localização
                </Label>
                <Input
                  id="local"
                  placeholder="Ex: Bloco A / Telhado"
                  className="bg-black/40 border-slate-700 text-sm"
                  value={formData.local_instalacao}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      local_instalacao: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            {/* Fabricante e Modelo */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label
                  htmlFor="fab"
                  className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"
                >
                  <Factory size={12} /> Fabricante
                </Label>
                <Input
                  id="fab"
                  placeholder="Ex: WEG / Schneider"
                  className="bg-black/40 border-slate-700 text-sm"
                  value={formData.fabricante}
                  onChange={(e) =>
                    setFormData({ ...formData, fabricante: e.target.value })
                  }
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label
                  htmlFor="mod"
                  className="text-xs font-bold text-slate-400 uppercase tracking-wider"
                >
                  Modelo
                </Label>
                <Input
                  id="mod"
                  placeholder="Ex: VFD-9000"
                  className="bg-black/40 border-slate-700 text-sm"
                  value={formData.modelo}
                  onChange={(e) =>
                    setFormData({ ...formData, modelo: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {/* Descrição */}
            <div className="grid gap-2">
              <Label
                htmlFor="desc"
                className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"
              >
                <FileText size={12} /> Observações Técnicas
              </Label>
              <Textarea
                id="desc"
                placeholder="Descreva detalhes como potência, tensão ou criticidade..."
                className=" border-slate-700 text-xs min-h-[80px] focus:border-blue-500"
                value={formData.descricao}
                onChange={(e) =>
                  setFormData({ ...formData, descricao: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                <Camera size={12} /> Fotos
              </Label>
              <div className="grid grid-cols-3 gap-2 mb-2">
                {formData.file && (
                  <div className="relative aspect-square rounded-lg overflow-hidden border border-slate-700 group">
                    <Image
                      src={URL.createObjectURL(formData.file)}
                      alt="Preview"
                      fill // Usa fill para preencher o container aspect-square
                      className="object-cover"
                    />
                    {/* Botão para remover a foto */}
                    <button
                      onClick={() => setFormData({ ...formData, file: null })}
                      className="absolute top-1 right-1 bg-red-500/80 hover:bg-red-600 text-white rounded-full p-1 z-20 transition-colors"
                    >
                      <Plus size={12} className="rotate-45" />
                    </button>
                  </div>
                )}
                {!formData.file && (
                  <label className="flex flex-col items-center justify-center aspect-square border-2 border-slate-700 border-dashed rounded-lg cursor-pointer bg-black/40 hover:bg-black/60 transition-all group">
                    <Camera
                      size={20}
                      className="text-slate-500 group-hover:text-blue-400 mb-1"
                    />
                    <span className="text-[9px] text-slate-500 group-hover:text-blue-400 text-center px-1">
                      Anexar Foto
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </label>
                )}
              </div>
            </div>
            <DialogFooter className="border-t border-slate-800 pt-4 mt-2">
              <DialogClose className="flex gap-2 items-center">
                <Button
                  type="button"
                  variant="ghost"
                  className="text-slate-400 hover:text-white hover:bg-white/5"
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handleSave}
                  className="bg-blue-600 hover:bg-blue-700 text-white gap-2 px-8"
                  type="submit"
                >
                  <Save size={16} /> Finalizar Cadastro
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
