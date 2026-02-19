import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Send } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

interface ShowSolicitacaoMaterialProps {
  isRequestDialogOpen: boolean;
  setIsRequestDialogOpen: (open: boolean) => void;
  idOs?: string;
  onChange: (data: RequestProps) => void;
}

export interface RequestProps {
  nome: string;
  descricao: string;
  quantidade: number;
  unidade: string;
  imagem: File[] | null;
}
export function ShowSolicitacaoMaterial({
  isRequestDialogOpen,
  setIsRequestDialogOpen,
  idOs,
  onChange,
}: ShowSolicitacaoMaterialProps) {
  const [requestData, setRequestData] = useState<RequestProps>({
    nome: "",
    descricao: "",
    quantidade: 1,
    unidade: "Un",
    imagem: [],
  });

  const handleRequestMaterial = () => {
    onChange(requestData);

    // Feedback para o usuário e fecha o dialog
    toast.success("Solicitação enviada com sucesso!");
    setIsRequestDialogOpen(false);

    setRequestData({
      nome: "",
      descricao: "",
      quantidade: 1,
      unidade: "Un",
      imagem: [],
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const novasFotos = Array.from(files);
      setRequestData((prev) => ({
        ...prev,
        imagem: prev.imagem ? [...prev.imagem, ...novasFotos] : novasFotos,
      }));
    }
  };

  // Função para remover uma foto específica
  const removeImage = (indexToRemove: number) => {
    setRequestData((prev) => ({
      ...prev,
      imagem: prev.imagem
        ? prev.imagem.filter((_, i) => i !== indexToRemove)
        : null,
    }));
  };
  const statusOptions: string[] = ["Un", "Mts", "Rolo", "Galão"] as const;

  return (
    <Dialog open={isRequestDialogOpen} onOpenChange={setIsRequestDialogOpen}>
      <DialogContent className="bg-slate-900 border-slate-700 text-white sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Send size={18} className="text-blue-400" /> Solicitar Material
          </DialogTitle>
          <DialogDescription className="text-slate-400 text-xs">
            Informe os dados do material que não foi encontrado no catálogo.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="nome" className="text-xs">
              Nome do Material
            </Label>
            <Input
              id="nome"
              placeholder="Ex: Contatora 24V Schneider"
              className="bg-slate-950 border-slate-700 h-9 text-xs"
              value={requestData.nome}
              onChange={(e) =>
                setRequestData({ ...requestData, nome: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="nome" className="text-xs">
                Unidade
              </Label>
              <Select
                value={statusOptions[0]}
                onValueChange={(e) =>
                  setRequestData({ ...requestData, unidade: e })
                }
              >
                <SelectTrigger className="w-full bg-slate-950">
                  <SelectValue placeholder="Selecione o departamento" />
                </SelectTrigger>
                <SelectContent className="z-[100] bg-slate-950">
                  {" "}
                  {/* Z-index alto aqui */}
                  {statusOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="nome" className="text-xs">
                Quantidade
              </Label>
              <Input
                type="number"
                id="quantidade"
                placeholder="Ex: Contatora 24V Schneider"
                className="bg-slate-950 border-slate-700 h-9 text-xs"
                value={requestData.quantidade}
                onChange={(e) =>
                  setRequestData({
                    ...requestData,
                    quantidade: Number(e.target.value),
                  })
                }
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="desc" className="text-xs">
              Descrição / Motivo
            </Label>
            <Textarea
              id="desc"
              placeholder="Descreva brevemente o material..."
              className="bg-slate-950 border-slate-700 text-xs min-h-[80px]"
              value={requestData.descricao}
              onChange={(e) =>
                setRequestData({
                  ...requestData,
                  descricao: e.target.value,
                })
              }
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-xs">
              Fotos do Item ({requestData.imagem?.length || 0})
            </Label>

            <div className="grid grid-cols-3 gap-2 mb-2">
              {/* Renderização da Galeria de Previews */}
              {requestData.imagem?.map((file, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden border border-slate-700 group"
                >
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${index}`}
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="text-[10px] font-bold">X</span>
                  </button>
                </div>
              ))}

              {/* Botão "Adicionar Mais" estilo card */}
              <label className="flex flex-col items-center justify-center aspect-square border-2 border-slate-700 border-dashed rounded-lg cursor-pointer bg-slate-950 hover:bg-slate-800 transition-all">
                <Camera size={20} className="text-slate-500 mb-1" />
                <span className="text-[9px] text-slate-500">Adicionar</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  multiple // PERMITE SELECIONAR VÁRIOS DE UMA VEZ
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="ghost"
            onClick={() => setIsRequestDialogOpen(false)}
            className="text-xs"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleRequestMaterial}
            className="bg-blue-600 hover:bg-blue-700 text-xs gap-2"
            disabled={!requestData.nome}
          >
            <Send size={14} /> Solicitar Material
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
