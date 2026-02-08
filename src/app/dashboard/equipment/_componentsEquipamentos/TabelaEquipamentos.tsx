"use client";

import {
  MapPin,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  Calendar,
  Wrench,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { color } from "@/src/app/styles/color";
import { BadgeFuncao } from "@/components/layoute/BadgeFuncao";
import { useRouter } from "next/navigation";
import { BadgeStatusEquipamento } from "./BadgeStatusEquipamento";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { formatarData } from "@/src/app/actions/formatarData";
import { MobileEquipamentoCards } from "./MobileEquipamentoCards";

interface Equipamento {
  id: string;
  tag: string;
  nome: string;
  local: string;
  categoria: "Eletrica" | "Refrigeração" | "Civil";
  modelo: string;
  status: boolean;
  dataPreventiva: Date | null; // true = ativo, false = desativado
}

const listEquipamentos: Equipamento[] = [
  {
    id: "1",
    tag: "CH-01",
    nome: "Chiller 01",
    local: "CAG",
    categoria: "Refrigeração",
    modelo: "Carrier 30XA",
    status: true,
    dataPreventiva: new Date(2026, 0, 30),
  },
  {
    id: "2",
    tag: "GE-02",
    nome: "Gerador Shopping",
    local: "Doca",
    categoria: "Eletrica",
    modelo: "Stemac 500kVA",
    status: true,
    dataPreventiva: new Date(2026, 3, 12),
  },
  {
    id: "3",
    tag: "AC-12",
    nome: "Split Sala TI",
    local: "Sala Ti",
    categoria: "Refrigeração",
    modelo: "Daikin Inverter",
    status: false,
    dataPreventiva: null,
  },
];

export default function TableEquipamentos() {
  const router = useRouter();

  return (
    <Card className="mt-6 border-gray-400/40 max-sm:bg-transparent  max-sm:border-none">
      <CardHeader className="max-sm:p-0">
        <CardTitle className="flex items-center gap-2">
          <Wrench
            size={30}
            className={`${color.textIconAzul} ${color.bgIconAzul} p-1.5 rounded-sm`}
          />
          <h2 className={`${color.textBranco}`}>Lista de Equipamentos</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="rounded-md max-sm:hidden  bg-transparent">
          <Table >
            <TableHeader>
              <TableRow className="border-gray-400/20 hover:bg-transparent">
                <TableHead className="">TAG</TableHead>
                <TableHead>Equipamento / Modelo</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Proxima preventiva</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {listEquipamentos.map((item) => (
                <TableRow
                  key={item.id}
                  className={`border-gray-400/10 hover:bg-white/5 cursor-pointer group ${color.textTertiary} hover:${color.textBranco}`}
                  onClick={() => router.push(`/equipamentos/${item.id}`)}
                >
                  {/* Coluna TAG */}
                  <TableCell className={`font-mono  `}>{item.tag}</TableCell>

                  {/* Coluna Nome / Modelo */}
                  <TableCell>
                    <div className="flex flex-col">
                      <span className={`font-medium ${color.textBranco}`}>
                        {item.nome}
                      </span>
                      <span className="text-xs text-slate-500">
                        {item.modelo}
                      </span>
                    </div>
                  </TableCell>

                  {/* Coluna Categoria */}
                  <TableCell>
                    <BadgeFuncao funcao={item.categoria} />
                  </TableCell>

                  {/* Coluna Localização */}
                  <TableCell>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin size={14} className="text-slate-600" />
                      <span className="text-sm">{item.local}</span>
                    </div>
                  </TableCell>

                  {/* Coluna Status */}
                  <TableCell>
                    <BadgeStatusEquipamento status={item.status} />
                  </TableCell>
                  <TableCell>
                    <span>{formatarData(item.dataPreventiva) || "N/A"}</span>
                  </TableCell>

                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className={`${color.bgCard} ${color.textBranco} `}
                      >
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuItem className="gap-2 cursor-pointer">
                          <Eye size={14} />
                          Visualizar detalhes
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 cursor-pointer ">
                          <Pencil size={14} /> Editar Equipamento
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 cursor-pointer ">
                          <Calendar size={14} /> Programar preventiva
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 cursor-pointer ">
                          <Trash2 size={14} /> Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="md:hidden space-y-1">
          {listEquipamentos.map((item) => (
            <MobileEquipamentoCards key={item.id} item={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
