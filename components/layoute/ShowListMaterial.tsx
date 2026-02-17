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
import {
  DepartamentoProps,
  FiltersMateriais,
  TabelaMaterialProps,
} from "@/src/app/lib/type";
import { FilterDepartamento } from "@/src/app/dashboard/materials/_componentsMateriais/FilterDepartamento";
import { InputSerachMaterial } from "@/src/app/dashboard/materials/_componentsMateriais/InputSerachMaterial";

const infoMaterialLista: TabelaMaterialProps[] = [
  // ELÉTRICA
  {
    codigo: "EL-1245",
    descricao: "Luminária Quadrada Embutir 18W 3000K",
    despartamento: "Shopping Colinas",
    marca: "Avant",
    categoria: "Eletrica",
    quantidade: "23",
    unidade: "un",
  },
  {
    codigo: "EL-2090",
    descricao: "Disjuntor Monofásico DIN 20A",
    despartamento: "Shopping Colinas",
    marca: "Schneider",
    categoria: "Eletrica",
    quantidade: "15",
    unidade: "un",
  },
  {
    codigo: "EL-3341",
    descricao: "Cabo Flexível 2,5mm² Preto (Rolo 100m)",
    despartamento: "Shopping Colinas",
    marca: "Prysmian",
    categoria: "Eletrica",
    quantidade: "4", // Alerta de estoque baixo!
    unidade: "rl",
  },

  // REFRIGERAÇÃO
  {
    codigo: "AR-45782",
    descricao: "Gás Refrigerante R22 - Cilindro 1kg",
    despartamento: "Shopping Colinas",
    marca: "Chemours",
    categoria: "Refrigeração",
    quantidade: "3", // Alerta de estoque baixo!
    unidade: "un",
  },
  {
    codigo: "AR-1102",
    descricao: "Capacitor de Partida 35uF 450V",
    despartamento: "Shopping Colinas",
    marca: "WEG",
    categoria: "Refrigeração",
    quantidade: "12",
    unidade: "un",
  },
  {
    codigo: "AR-9980",
    descricao: "Fita Isolante Térmica Prata",
    despartamento: "Shopping Colinas",
    marca: "3M",
    categoria: "Refrigeração",
    quantidade: "8",
    unidade: "un",
  },

  // HIDRÁULICA
  {
    codigo: "HL-2",
    descricao: "Registro de Esfera 50mm (PVC)",
    despartamento: "Shopping Colinas",
    marca: "Tigre",
    categoria: "Hidraulica",
    quantidade: "2", // Alerta de estoque baixo!
    unidade: "un",
  },
  {
    codigo: "HL-1010",
    descricao: "Válvula de Descarga Manual",
    despartamento: "Shopping Colinas",
    marca: "Deca",
    categoria: "Hidraulica",
    quantidade: "6",
    unidade: "un",
  },
  {
    codigo: "HL-5521",
    descricao: "Anel de Vedação para Vaso Sanitário",
    despartamento: "Shopping Colinas",
    marca: "Censi",
    categoria: "Hidraulica",
    quantidade: "20",
    unidade: "un",
  },

  // CIVIL / OUTROS
  {
    codigo: "CV-0012",
    descricao: "Argamassa ACIII Cinza 20kg",
    despartamento: "Shopping Colinas",
    marca: "Votorantim",
    categoria: "Civil",
    quantidade: "10",
    unidade: "sc",
  },
  {
    codigo: "Ou-1154",
    descricao: "Spray Desengripante WD-40 300ml",
    despartamento: "Shopping Colinas",
    marca: "WD-40",
    categoria: "outros",
    quantidade: "14",
    unidade: "un",
  },
  {
    codigo: "Ou-8874",
    descricao: "Silicone Selante Transparente 280g",
    despartamento: "Shopping Colinas",
    marca: "TekBond",
    categoria: "outros",
    quantidade: "4", // Alerta de estoque baixo!
    unidade: "un",
  },
  {
    codigo: "EL-222132",
    descricao: "Fita LED Natalina Branco Quente",
    despartamento: "Shopping Colinas",
    marca: null,
    categoria: "Eletrica",
    quantidade: "30",
    unidade: "mts",
  },
];
import { ScrollArea } from "@/components/ui/scroll-area";

// Interface para o controle interno do dialog
interface CartItem {
  codigo: string;
  descricao: string;
  unidade: string;
  quantidadeUsada: number;
}

export function ShowListaMaterial({ idOs, onSelectMaterial }: any) {
  const [filters, setFilters] = useState<FiltersMateriais>({
    departamento: "Shopping Colinas",
    categoria: "Todos",
    busca: "",
  });

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
    const selecionados = Object.values(cart).map((item) => ({
      os_id: idOs,
      material_id: item.codigo,
      quantidade_usada: item.quantidadeUsada,
      status_baixado: false,
      data_gasto: new Date(),
    }));

    onSelectMaterial(selecionados);
    setCart({}); // Limpa após adicionar
  };

  return (
    <Dialog onOpenChange={(open) => !open && setCart({})}>
      <DialogTrigger asChild>
        <Button variant="default" className="gap-2">
          <Plus size={16} /> Adicionar Material
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl bg-slate-950 border-slate-800 text-white">
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

        <ScrollArea className="h-[350px] mt-4 pr-4">
          <div className="flex flex-col gap-2">
            {materiaisFiltrados.map((item: TabelaMaterialProps) => {
              const qtyInCart = cart[item.codigo]?.quantidadeUsada || 0;

              return (
                <div
                  key={item.codigo}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                    qtyInCart > 0
                      ? "border-blue-500 bg-blue-500/5"
                      : "border-slate-800 bg-slate-900/50"
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
      </DialogContent>
    </Dialog>
  );
}
