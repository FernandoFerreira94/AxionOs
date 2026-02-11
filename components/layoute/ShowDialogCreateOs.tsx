"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Plus,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Wrench,
  Eye,
  Camera,
  CheckCircle2,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner"; // Ou o componente de toast que você usa

export default function CriarOSFlow() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  // Estado centralizado do formulário
  const [formData, setFormData] = useState({
    tipoServico: "", // Corretiva, Melhorias, Acompanhamento
    categoria: "",
    titulo: "",
    prioridade: "",
    temEquipamento: false,
    equipamento: "",
    lojaSolicitante: "",
    local: "",
    lado: "",
    subLocal: "",
    descricaoServico: "",
    descricaoLocal: "",
    foto: null,
  });

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setStep(1);
      setFormData({
        tipoServico: "",
        categoria: "",
        titulo: "",
        prioridade: "",
        temEquipamento: false,
        equipamento: "",
        lojaSolicitante: "",
        local: "",
        lado: "",
        subLocal: "",
        descricaoServico: "",
        descricaoLocal: "",
        foto: null,
      });
    }, 300);
  };

  // Lógica de validação para habilitar o botão "Continuar"
  const canContinue = () => {
    if (step === 1) {
      if (formData.tipoServico === "Acompanhamento")
        return formData.lojaSolicitante.length > 3;
      if (
        formData.tipoServico === "Corretiva" ||
        formData.tipoServico === "Melhorias"
      ) {
        const baseOk =
          formData.categoria && formData.titulo && formData.prioridade;
        if (formData.temEquipamento) return baseOk && formData.equipamento;
        return baseOk;
      }
      return false;
    }
    if (step === 2) return formData.local && formData.subLocal;
    if (step === 3) return formData.descricaoServico.length > 6;
    return false;
  };

  const handleFinalizar = () => {
    toast.success("Ordem de Serviço criada com sucesso!");
    handleClose();
  };

  console.log(formData);

  return (
    <>
      <Button
        variant={"ghost"}
        onClick={() => setOpen(true)}
        className="max-sm:w-full max-sm:h-10 flex items-center gap-2 bg-blue-500 hover:bg-blue-600 hover:text-white cursor-pointer"
      >
        <Plus size={18} /> Criar OS
      </Button>

      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent
          className={`bg-neutral-900 border-gray-400/20 text-white   overflow-y-auto`}
        >
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center border-2 transition-all ${step > 1 ? "bg-green-500 border-green-500" : "bg-blue-600 border-blue-600"}`}
              >
                {step > 1 ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <span className="font-bold">1</span>
                )}
              </div>

              <div className="h-1 w-12 bg-gray-600"> </div>
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center border-2 transition-all ${step > 2 ? "bg-green-500 border-green-500" : step === 2 ? "bg-blue-600 border-blue-600" : "border-gray-600 text-gray-600"}`}
              >
                {step > 2 ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <span className="font-bold">2</span>
                )}
              </div>
              <div className="h-1 w-12 bg-gray-600"> </div>
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center border-2 transition-all ${step === 3 ? "bg-blue-600 border-blue-600" : "border-gray-600 text-gray-600"}`}
              >
                <span className="font-bold">3</span>
              </div>
              <DialogTitle className="ml-2 text-sm text-neutral-400">
                Passo 0{step}
              </DialogTitle>
            </div>
          </DialogHeader>

          {/* --- PASSO 01: CLASSIFICAÇÃO --- */}
          {step === 1 && (
            <div className="space-y-6 py-4">
              <div>
                <h2 className="font-semibold text-lg">
                  Classificação de Serviço
                </h2>
                <p className="text-sm text-neutral-400">
                  Selecione o tipo de atendimento
                </p>
                <div className="grid grid-cols-1 gap-2 mt-4">
                  {["Corretiva", "Melhorias", "Acompanhamento"].map((t) => (
                    <Button
                      key={t}
                      variant={
                        formData.tipoServico === t ? "default" : "outline"
                      }
                      className={`w-full justify-start gap-2 bg-neutral-600 ${formData.tipoServico === t ? "bg-blue-600 border-blue-600 hover:bg-blue-600" : "border-gray-700"}`}
                      onClick={() =>
                        setFormData({ ...formData, tipoServico: t })
                      }
                    >
                      {t === "Corretiva" && <Wrench size={16} />}
                      {t === "Melhorias" && <Lightbulb size={16} />}
                      {t === "Acompanhamento" && <Eye size={16} />}
                      {t}
                    </Button>
                  ))}
                </div>
              </div>

              {(formData.tipoServico === "Corretiva" ||
                formData.tipoServico === "Melhorias") && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-4">
                  <div className="space-y-2">
                    <Label className="text-xs text-neutral-400 uppercase">
                      Categoria
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Eletrica", "Refrigeração", "Civil", "Outros"].map(
                        (cat) => (
                          <Button
                            key={cat}
                            variant="outline"
                            size="sm"
                            className={`w-full justify-start gap-2 bg-neutral-600 ${formData.categoria === cat ? "bg-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white" : "border-gray-700"}`}
                            onClick={() =>
                              setFormData({ ...formData, categoria: cat })
                            }
                          >
                            {cat}
                          </Button>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Título da OS</Label>
                    <Input
                      placeholder="Ex: Troca de luminarias..."
                      className="bg-[#0a0a0a] border-gray-800"
                      onChange={(e) =>
                        setFormData({ ...formData, titulo: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Prioridade</Label>
                    <Select
                      onValueChange={(v) =>
                        setFormData({ ...formData, prioridade: v })
                      }
                    >
                      <SelectTrigger className="bg-[#0a0a0a] border-gray-800">
                        <SelectValue placeholder="Selecione a urgência" />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-900 border-gray-800 text-white">
                        <SelectItem value="Baixa">Baixa</SelectItem>
                        <SelectItem value="Media">Média</SelectItem>
                        <SelectItem value="Alta">Alta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg border border-gray-800">
                    <Checkbox
                      id="equip"
                      checked={formData.temEquipamento}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, temEquipamento: !!checked })
                      }
                    />
                    <label
                      htmlFor="equip"
                      className="text-sm font-medium leading-none"
                    >
                      Vincular Equipamento?
                    </label>
                  </div>

                  {formData.temEquipamento && formData.categoria && (
                    <div className="space-y-2 animate-in zoom-in-95">
                      <Label className="text-xs text-blue-400">
                        Filtrando por: {formData.categoria}
                      </Label>
                      <Select
                        onValueChange={(v) =>
                          setFormData({ ...formData, equipamento: v })
                        }
                      >
                        <SelectTrigger className="bg-[#0a0a0a] border-gray-800 w-full py-6">
                          <SelectValue placeholder="Selecione o equipamento" />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-900 w-full border-gray-800 text-white">
                          <SelectItem value="eq1">
                            <div className="flex items-center  gap-4 text-left ">
                              <span>Gerador Principal</span>
                              <span className="text-[10px] text-gray-500">
                                Doca
                              </span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
              )}

              {formData.tipoServico === "Acompanhamento" && (
                <div className="space-y-2 animate-in fade-in">
                  <Label>Nome da Loja Solicitante</Label>
                  <Input
                    placeholder="Ex: Fast Shop, Starbucks..."
                    className="bg-[#0a0a0a] border-gray-800"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        lojaSolicitante: e.target.value,
                      })
                    }
                  />
                </div>
              )}
            </div>
          )}

          {/* --- PASSO 02: LOCALIZAÇÃO --- */}
          {step === 2 && (
            <div className="space-y-6 py-4 animate-in slide-in-from-right-4">
              <h2 className="font-semibold text-lg">Localização do Serviço</h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Complexo / Área</Label>
                  <Select
                    onValueChange={(v) =>
                      setFormData({ ...formData, local: v })
                    }
                  >
                    <SelectTrigger className="bg-[#0a0a0a] border-gray-800 w-full">
                      <SelectValue placeholder="Onde será o serviço?" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900 border-gray-800 text-white">
                      <SelectItem value="Shopping">Shopping</SelectItem>
                      <SelectItem value="Estacionamento">
                        Estacionamento
                      </SelectItem>
                      <SelectItem value="Torre">Torre Comercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.local === "Shopping" && (
                  <>
                    <div className="space-y-2">
                      <Label>Externo ou Interno</Label>
                      <Select
                        onValueChange={(v) =>
                          setFormData({ ...formData, lado: v })
                        }
                      >
                        <SelectTrigger className="bg-[#0a0a0a] border-gray-800 w-full">
                          <SelectValue placeholder="Selecione a localização" />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-900 border-gray-800 text-white">
                          <SelectItem value="externo">Externo</SelectItem>
                          <SelectItem value="interno">Interno</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.lado === "externo" && (
                      <div className="space-y-2">
                        <Label>Localidade</Label>
                        <Select
                          onValueChange={(v) =>
                            setFormData({ ...formData, subLocal: v })
                          }
                        >
                          <SelectTrigger className="bg-[#0a0a0a] border-gray-800 w-full">
                            <SelectValue placeholder="Selecione a localização" />
                          </SelectTrigger>
                          <SelectContent className="bg-neutral-900 border-gray-800 text-white">
                            <SelectItem value="Doca">Doca</SelectItem>
                            <SelectItem value="Cag">CAG</SelectItem>
                            <SelectItem value="Subestacao">
                              Subestação Principal
                            </SelectItem>
                            <SelectItem value="Bomba">
                              Casa de Bombas
                            </SelectItem>
                            <SelectItem value="Gerador">
                              Gerador Principal
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {formData.lado === "interno" && (
                      <div className="space-y-2">
                        <Label>Localidade</Label>
                        <Select
                          onValueChange={(v) =>
                            setFormData({ ...formData, subLocal: v })
                          }
                        >
                          <SelectTrigger className="bg-[#0a0a0a] border-gray-800 w-full">
                            <SelectValue placeholder="Selecione a localização" />
                          </SelectTrigger>
                          <SelectContent className="bg-neutral-900 border-gray-800 text-white">
                            <SelectItem value="Piso Nt lado A">
                              Piso Nt lado A
                            </SelectItem>
                            <SelectItem value="Piso Nt lado B">
                              Piso Nt lado B
                            </SelectItem>
                            <SelectItem value="Piso Ns lado A">
                              Piso Ns lado A
                            </SelectItem>
                            <SelectItem value="Piso Ns lado B">
                              Piso Ns lado B
                            </SelectItem>
                            <SelectItem value="Administração">
                              Administração
                            </SelectItem>
                            <SelectItem value="Sac">Sac</SelectItem>
                            <SelectItem value="Outros">Outros</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </>
                )}

                {formData.local === "Torre" && (
                  <>
                    <div className="space-y-2">
                      <Label>Pavimento</Label>
                      <Select
                        onValueChange={(v) =>
                          setFormData({ ...formData, lado: v })
                        }
                      >
                        <SelectTrigger className="bg-[#0a0a0a] border-gray-800 w-full">
                          <SelectValue placeholder="Selecione a localização" />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-900 border-gray-800 text-white">
                          <SelectItem value="-1">Andar -01</SelectItem>
                          <SelectItem value="recepcao">Recepção</SelectItem>
                          <SelectItem value="evento">Evento</SelectItem>
                          <SelectItem value="2">Andar 02</SelectItem>
                          <SelectItem value="3">Andar 03</SelectItem>
                          <SelectItem value="4">Andar 04</SelectItem>
                          <SelectItem value="5">Andar 05</SelectItem>
                          <SelectItem value="6">Andar 06</SelectItem>
                          <SelectItem value="7">Andar 07</SelectItem>
                          <SelectItem value="8">Andar 08</SelectItem>
                          <SelectItem value="9">Andar 09</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.lado === "evento" && (
                      <div className="space-y-2">
                        <Label>Localidade</Label>
                        <Select
                          onValueChange={(v) =>
                            setFormData({ ...formData, subLocal: v })
                          }
                        >
                          <SelectTrigger className="bg-[#0a0a0a] border-gray-800 w-full">
                            <SelectValue placeholder="Selecione a localização" />
                          </SelectTrigger>
                          <SelectContent className="bg-neutral-900 border-gray-800 text-white">
                            <SelectItem value="manhattan">Manhattan</SelectItem>
                            <SelectItem value="Neighborhood">
                              Neighborhood
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label>Descreva o local</Label>
                      <Textarea
                        placeholder="Descreva o local se for necessário..."
                        className="bg-[#0a0a0a] border-gray-800 min-h-[120px]"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            descricaoLocal: e.target.value,
                          })
                        }
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* --- PASSO 03: DETALHES E FOTO --- */}
          {step === 3 && (
            <div className="space-y-6 py-4 animate-in slide-in-from-right-4">
              <h2 className="font-semibold text-lg">Descrição e Evidência</h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Descreva a atividade</Label>
                  <Textarea
                    placeholder="Detalhe o que será executado..."
                    className="bg-[#0a0a0a] border-gray-800 min-h-[120px]"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        descricaoServico: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Anexar Foto</Label>
                  <div className="border-2 border-dashed border-gray-800 rounded-lg p-8 flex flex-col items-center justify-center gap-2 hover:bg-white/5 cursor-pointer transition-colors">
                    <Camera className="text-slate-500" />
                    <span className="text-xs text-slate-500">
                      Tirar foto ou selecionar arquivo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="flex flex-row gap-2 sm:justify-between items-center border-t border-gray-800 pt-4">
            {step === 1 ? (
              <Button variant="ghost" onClick={handleClose}>
                Cancelar
              </Button>
            ) : (
              <Button variant="ghost" onClick={() => setStep(step - 1)}>
                <ChevronLeft size={16} className="mr-1" /> Voltar
              </Button>
            )}

            {step < 3 ? (
              <Button
                disabled={!canContinue()}
                onClick={() => setStep(step + 1)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Continuar <ChevronRight size={16} className="ml-1" />
              </Button>
            ) : (
              <Button
                disabled={!canContinue()}
                onClick={handleFinalizar}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Criar Ordem de Serviço
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
