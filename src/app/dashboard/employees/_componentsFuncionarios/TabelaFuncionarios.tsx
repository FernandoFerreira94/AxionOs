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
  MoreHorizontal,
  UserMinus,
  Trash2,
  AlertTriangle,
  Calendar1,
  Calendar,
  CalendarArrowUp,
  CalendarArrowDown,
} from "lucide-react";
import { formatarData } from "@/src/app/actions/formatarData";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Funcionario {
  nome: string;
  funcao: string;
  status?: boolean;
  dataEntrada: Date;
  dataSaida?: Date | null;
}

const infoFuncionarios: Funcionario[] = [
  {
    nome: "Eduardo Perotti",
    funcao: "Tecnico Refrigeração",
    status: true,
    dataEntrada: new Date(2024, 11, 23),
    dataSaida: null,
  },
  {
    nome: "Fernando Pedro",
    funcao: "Eletrica",
    status: true,
    dataEntrada: new Date(2024, 11, 23),
    dataSaida: null,
  },
  {
    nome: "Fabio Carvalho",
    funcao: "Supervisor",
    status: true,
    dataEntrada: new Date(2024, 11, 12),
    dataSaida: null,
  },
  {
    nome: "Domingo Silva",
    funcao: "Oficial de manuteção",
    status: false,
    dataEntrada: new Date(2024, 11, 30),
    dataSaida: new Date(2025, 4, 18),
  },
  {
    nome: "Marcelo Mendes",
    funcao: "Oficial de manuteção",
    status: true,
    dataEntrada: new Date(2024, 11, 23),
    dataSaida: null,
  },
];

export function TabelaFuncionarios() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedFunc, setSelectedFunc] = useState<Funcionario>(
    {} as Funcionario,
  );

  // Função para abrir o modal de desativar
  const handleOpenDesativar = (funcionario: Funcionario) => {
    setSelectedFunc(funcionario);
    setIsDialogOpen(true);
  };

  function getIniciais(nomeCompleto: string): string {
    if (!nomeCompleto) return "";

    // Divide o nome por espaços e remove espaços extras
    const nomes = nomeCompleto.trim().split(/\s+/);

    // Pega a primeira letra do primeiro nome
    const primeiraSigla = nomes[0]?.[0] || "";

    // Pega a primeira letra do último nome (se houver mais de um nome)
    const segundaSigla = nomes.length > 1 ? nomes[nomes.length - 1][0] : "";

    // Retorna as siglas juntas em caixa alta
    return (primeiraSigla + segundaSigla).toUpperCase();
  }

  function calcularTempoPermanencia(
    dataContratacao: Date,
    dataSaida?: Date | null,
  ): string {
    const inicio = new Date(dataContratacao);
    const fim = dataSaida ? new Date(dataSaida) : new Date();

    let anos = fim.getFullYear() - inicio.getFullYear();
    let meses = fim.getMonth() - inicio.getMonth();
    let dias = fim.getDate() - inicio.getDate();

    // Ajuste se o dia atual for menor que o dia de início
    if (dias < 0) {
      meses--;
      const ultimoDiaMesAnterior = new Date(
        fim.getFullYear(),
        fim.getMonth(),
        0,
      ).getDate();
      dias += ultimoDiaMesAnterior;
    }

    // Ajuste se o mês atual for menor que o mês de início
    if (meses < 0) {
      anos--;
      meses += 12;
    }

    // Formatação da string de retorno
    const partes = [];
    if (anos > 0) partes.push(`${anos} ${anos === 1 ? "ano" : "anos"}`);
    if (meses > 0) partes.push(`${meses} ${meses === 1 ? "mês" : "meses"}`);

    // Se for menos de um mês, mostra os dias
    if (anos === 0 && meses === 0) {
      if (dias <= 0) return "Iniciou hoje";
      partes.push(`${dias} ${dias === 1 ? "dia" : "dias"}`);
    }

    return partes.join(" e ");
  }

  return (
    <>
      <Card
        className={`border-gray-400/40 flex flex-col h-[calc(100vh-160px)] mt-6 mb-6 overflow-hidden  shadow-2xl ${color.textBranco}`}
      >
        <CardHeader className="pb-4 flex-none">
          <CardTitle className="flex items-center gap-2">
            <Users
              size={30}
              className={`${color.textIconAzulClaro} ${color.bgIconAzulClaro} p-1.5 rounded-sm`}
            />
            <h2 className="text-xl font-bold">Quadro de Colaboradores</h2>
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0 overflow-hidden">
          <ScrollArea className="h-full w-full px-6">
            <Table>
              <TableHeader className={`${color.bgMain}  `}>
                <TableRow className="border-gray-400/20 hover:bg-transparent ">
                  <TableHead>Funcionário</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Contratação</TableHead>
                  <TableHead>Dispensado</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {infoFuncionarios.map((item) => {
                  const iniciais = getIniciais(item.nome);
                  return (
                    <TableRow
                      key={item.nome}
                      className="border-gray-400/10 hover:bg-white/5"
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold border border-blue-500/20">
                            {iniciais}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold">
                              {item.nome}
                            </span>
                            <span className="text-[11px] text-slate-500">
                              {item.funcao}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={` ${item.status ? `${color.textIconVerde} ${color.bgIconVerde}` : `${color.bgIconCinza} ${color.textIconCinza}`}`}
                        >
                          {item.status ? "Ativo" : "Desativado"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm ">
                        <div className="flex flex-col">
                          <span className="text-xs flex gap-2 items-center text-slate-400">
                            <CalendarArrowUp size={12} />
                            Entrada
                          </span>
                          <span className={color.textBranco}>
                            {" "}
                            {formatarData(item.dataEntrada)}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm ">
                        {item.dataSaida ? (
                          <div className="flex flex-col">
                            <span className="text-xs flex gap-2 items-center text-slate-400">
                              <CalendarArrowDown size={12} />
                              Saída
                            </span>
                            <span className={color.textBranco}>
                              {" "}
                              {formatarData(item.dataSaida)}
                            </span>
                          </div>
                        ) : (
                          <span className="text-xs">-</span>
                        )}
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
                            className={`${color.bgMain} ${color.textBranco} `}
                          >
                            <DropdownMenuLabel>Ações</DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-gray-800" />
                            <DropdownMenuItem
                              className="flex items-center gap-2 cursor-pointer hover:bg-white/5"
                              onClick={() =>
                                handleOpenDesativar({
                                  nome: item.nome,
                                  funcao: item.funcao,
                                  dataEntrada: item.dataEntrada,
                                })
                              }
                            >
                              <UserMinus
                                size={16}
                                className={color.textIconCinza}
                              />
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
                  );
                })}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* DIALOG DE DESATIVAÇÃO */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className=" border-gray-800 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 ">
              <AlertTriangle size={20} className="text-blue-500" />
              Desativar Colaborador
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              Você está prestes a mudar o status de{" "}
              <strong>{selectedFunc?.nome}</strong> para inativo.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4 space-y-4 ">
            <div className="bg-white/5 p-3 rounded-md border border-gray-800 grid grid-cols-2">
              <div>
                <div className="text-[10px] uppercase text-slate-500 font-bold mb-1">
                  Dados Atuais
                </div>
                <div className="text-sm font-medium text-slate-200">
                  {selectedFunc?.nome}
                </div>
                <div className="text-xs text-slate-400">
                  {selectedFunc?.funcao}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase text-slate-500 font-bold mb-1">
                  Tempo de Trabalho ate hoje
                </div>
                <div className="text-sm  text-slate-200">
                  {calcularTempoPermanencia(selectedFunc?.dataEntrada)}
                </div>
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
