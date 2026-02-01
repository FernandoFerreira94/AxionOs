"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { color } from "@/src/app/styles/color";
import {
  Users,
  UserCircle,
  Calendar,
  MoreHorizontal,
  UserMinus,
  Trash2,
  AlertTriangle,
} from "lucide-react";

export function TabelaFuncionarios() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedFunc, setSelectedFunc] = useState<any>(null);

  // Função para abrir o modal de desativar
  const handleOpenDesativar = (funcionario: any) => {
    setSelectedFunc(funcionario);
    setIsDialogOpen(true);
  };

  return (
    <>
      <Card className={`border-gray-400/40 mt-6 ${color.textBranco}`}>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2">
            <Users
              size={30}
              className={`${color.textIconAzulClaro} ${color.bgIconAzulClaro} p-1.5 rounded-sm`}
            />
            <h2 className="text-xl font-bold">Quadro de Colaboradores</h2>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-gray-400/20 hover:bg-transparent">
                <TableHead>Funcionário</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead>Entrada</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Mapeamento fictício - use seus dados aqui */}
              <TableRow className="border-gray-400/10 hover:bg-white/5">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold border border-blue-500/20">
                      EP
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">
                        Eduardo Perotti
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Técnico Refrigeração
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                    Ativo
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-slate-300">
                  15/03/2022
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 w-8 p-0 text-slate-400"
                      >
                        <MoreHorizontal size={18} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="bg-[#0f0f0f] border-gray-800 text-slate-300"
                    >
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-gray-800" />
                      <DropdownMenuItem
                        className="flex items-center gap-2 cursor-pointer hover:bg-white/5"
                        onClick={() =>
                          handleOpenDesativar({
                            nome: "Eduardo Perotti",
                            cargo: "Técnico Refrigeração",
                          })
                        }
                      >
                        <UserMinus size={16} className="text-amber-500" />
                        Desativar Funcionário
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-red-400 hover:bg-red-500/10 focus:text-red-400">
                        <Trash2 size={16} />
                        Excluir Cadastro
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* DIALOG DE DESATIVAÇÃO */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-[#0f0f0f] border-gray-800 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-amber-500">
              <AlertTriangle size={20} />
              Desativar Colaborador
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              Você está prestes a mudar o status de{" "}
              <strong>{selectedFunc?.nome}</strong> para inativo.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4 space-y-4">
            {/* Informações do Funcionário no Modal */}
            <div className="bg-white/5 p-3 rounded-md border border-gray-800">
              <div className="text-[10px] uppercase text-slate-500 font-bold mb-1">
                Dados Atuais
              </div>
              <div className="text-sm font-medium text-slate-200">
                {selectedFunc?.nome}
              </div>
              <div className="text-xs text-slate-400">
                {selectedFunc?.cargo}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dataSaida" className="text-slate-300">
                Data de Desligamento
              </Label>
              <Input
                id="dataSaida"
                type="date"
                className="bg-transparent border-gray-700 focus:border-amber-500 text-slate-200"
              />
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-md">
              <p className="text-[11px] text-amber-200 leading-tight">
                Ao desativar, o funcionário não aparecerá mais nas listas de
                serviços ativos, mas seu histórico será mantido.
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="ghost"
              onClick={() => setIsDialogOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              Cancelar
            </Button>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Confirmar Desativação
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
