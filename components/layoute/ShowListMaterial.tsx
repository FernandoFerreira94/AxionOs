"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { FilterCategoria } from "@/src/app/dashboard/materials/_componentsMateriais/FilterCategoria";
import { color } from "@/src/app/styles/color";
import { CheckCircle2, Minus, Package, Plus } from "lucide-react";
import { FiltersMateriais, TabelaMaterialProps } from "@/src/app/lib/type";
import { FilterDepartamento } from "@/src/app/dashboard/materials/_componentsMateriais/FilterDepartamento";
import { InputSerachMaterial } from "@/src/app/dashboard/materials/_componentsMateriais/InputSerachMaterial";

import { ScrollArea } from "@/components/ui/scroll-area";
import { MaterialSelecionado } from "@/src/app/dashboard/preventive/checklist/[id]/_componentes/TableCheckList";
import { infoMaterialLista } from "@/src/app/dashboard/materials/listaMaterial";

import {
  RequestProps,
  ShowSolicitacaoMaterial,
} from "./SideBar/ShowSolicitacaoMaterial";
// Interface para o controle interno do dialog
interface CartItem {
  codigo: string;
  descricao: string;
  unidade: string;
  quantidadeUsada: number;
}

interface ListaMaterialProps {
  idOs: string;
  onSelectMaterial: (materiais: MaterialSelecionado[]) => void;
  onChangeMaterial: (materiais: RequestProps) => void;
  value: RequestProps[];
}

export function ShowListaMaterial({
  idOs,
  onSelectMaterial,
  onChangeMaterial,
  value,
}: ListaMaterialProps) {
  const [filters, setFilters] = useState<FiltersMateriais>({
    departamento: "Shopping Colinas",
    categoria: "Todos",
    busca: "",
  });

  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false);

  // Estado temporário para o que o usuário está selecionando no momento
  const [cart, setCart] = useState<Record<string, CartItem>>({});

  const materiaisFiltrados = infoMaterialLista.filter(
    (item: TabelaMaterialProps) => {
      const matchBusca =
        item.descricao.toLowerCase().includes(filters.busca.toLowerCase()) ||
        item.codigo.toLowerCase().includes(filters.busca.toLowerCase());
      const matchCat =
        filters.categoria === "Todos" || item.categoria === filters.categoria;
      return matchBusca && matchCat;
    },
  );

  const updateQuantity = (item: TabelaMaterialProps, delta: number) => {
    setCart((prev) => {
      const currentQty = prev[item.codigo]?.quantidadeUsada || 0;
      const newQty = currentQty + delta;

      if (newQty <= 0) {
        const { [item.codigo]: _, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [item.codigo]: {
          codigo: item.codigo,
          descricao: item.descricao,
          unidade: item.unidade,
          quantidadeUsada: newQty,
        },
      };
    });
  };
  const handleConfirmSelection = () => {
    const selecionados: MaterialSelecionado[] = Object.values(cart).map(
      (item) => ({
        os_id: idOs,
        material_id: item.codigo,
        descricao: item.descricao, // Adicione isso para aparecer o nome na tabela
        unidade: item.unidade, // Adicione isso para aparecer 'un', 'rl', etc
        quantidade_usada: item.quantidadeUsada,
        status_baixa: false,
        data_gasto: new Date(),
      }),
    );

    onSelectMaterial(selecionados);
    setCart({});
  };

  return (
    <Dialog onOpenChange={(open) => !open && setCart({})}>
      <DialogTrigger asChild>
        <Button variant="default" className="gap-2">
          <Plus size={16} /> Adicionar Material
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Package size={22} className={color.textIconAmarelo} />
            Catálogo de Materiais
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Selecione a quantidade de cada item utilizado.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-3 my-2">
          <FilterDepartamento
            value={filters.departamento}
            onChange={(val) => setFilters((p) => ({ ...p, departamento: val }))}
          />
          <FilterCategoria
            value={filters.categoria}
            onChange={(val) => setFilters((p) => ({ ...p, categoria: val }))}
          />
        </div>

        <InputSerachMaterial
          value={filters.busca}
          onChange={(val) => setFilters((p) => ({ ...p, busca: val }))}
        />

        <Button
          variant="default"
          className="text-xs w-fit "
          onClick={() => setIsRequestDialogOpen(true)}
        >
          {" "}
          <Plus size={16} /> Solicitar Material não cadastrado
        </Button>

        <ScrollArea className="h-[350px] mt-4 pr-4">
          <div className="flex flex-col gap-2">
            {materiaisFiltrados.map((item: TabelaMaterialProps) => {
              const qtyInCart = cart[item.codigo]?.quantidadeUsada || 0;

              return (
                <div
                  key={item.codigo}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                    qtyInCart > 0
                      ? "border-blue-500 bg-slate-900"
                      : "border-slate-800 bg-neutral-950"
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-blue-400 uppercase tracking-tighter">
                        {item.codigo}
                      </span>
                      {qtyInCart > 0 && (
                        <CheckCircle2 size={12} className="text-blue-500" />
                      )}
                    </div>
                    <span className="text-sm font-medium leading-none">
                      {item.descricao}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Estoque: {item.quantidade} {item.unidade}
                    </span>
                  </div>

                  <div className="flex items-center bg-slate-950 border border-slate-800 rounded-md p-1 gap-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-7 w-7 text-slate-400 hover:text-white"
                      onClick={() => updateQuantity(item, -1)}
                      disabled={qtyInCart === 0}
                    >
                      <Minus size={14} />
                    </Button>

                    <span className="w-8 text-center text-xs font-bold">
                      {qtyInCart}
                    </span>

                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-7 w-7 text-blue-400 hover:text-blue-300"
                      onClick={() => updateQuantity(item, 1)}
                    >
                      <Plus size={14} />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>

        <DialogFooter className="flex items-center justify-between border-t border-slate-800 pt-4 mt-2">
          <div className="text-xs text-slate-400">
            {Object.keys(cart).length} itens selecionados
          </div>
          <div className="flex gap-2">
            <DialogClose asChild>
              <Button variant="outline" className="text-xs border-slate-800">
                Cancelar
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                onClick={handleConfirmSelection}
                className="bg-blue-600 hover:bg-blue-700 text-xs"
                disabled={Object.keys(cart).length === 0}
              >
                Confirmar e Adicionar
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
        <ShowSolicitacaoMaterial
          isRequestDialogOpen={isRequestDialogOpen}
          setIsRequestDialogOpen={setIsRequestDialogOpen}
          idOs={idOs}
          onChange={(item) => {
            onChangeMaterial(item); // Avisa o pai que tem item novo
            setIsRequestDialogOpen(false); // Fecha o dialog
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
