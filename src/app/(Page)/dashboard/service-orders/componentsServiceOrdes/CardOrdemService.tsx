import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Eye, Pencil, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PropsOrdenservico } from "@/src/app/lib/type";
import { color } from "@/src/app/styles/color";
import { statusConfig } from "@/src/app/utils/statusConfig";
import clsx from "clsx";
import { formatarData } from "@/src/app/actions/formatarData";

const listAtividades: PropsOrdenservico[] = [
  {
    os: "#AC-1023",
    status: "Aberto",
    preStatus: null,
    tipoServico: "Corretiva",
    tipo: "Refrigeração",
    atividade: "Ar-Condicionado",
    tecnico: "Eduardo Perotti",
    dataAbertura: new Date(2026, 0, 12),
    dataFinalizado: null,
    descricao: "Completado Gas R-22",
    local: "Qto 04",
    complexo: "Shopping",
    apoio: null,
    prioridade: "Alta",
    materiais: ["Gas R-22"],
  },
  {
    os: "#AC-1245",
    status: "Aguardando Material",
    preStatus: "Aberto",
    tipoServico: "Melhoria",
    tipo: "Eletrico",
    atividade: "Troca de luminaria",
    tecnico: "Fernando Pedro",
    dataAbertura: new Date(2026, 0, 23),
    dataFinalizado: new Date(2026, 0, 24),
    descricao: "Troca de 4 luminarias",
    local: "Mall NS Barra",
    complexo: "Shopping",
    apoio: null,
    prioridade: "Baixa",
    materiais: [
      {
        material: "Luminarias",
        qtd: 4,
      },
      {
        material: "Plug macho 10A",
        qtd: 4,
      },
    ],
  },
  {
    os: "#EL-45784",
    status: "Aguardando Fiscalização",
    preStatus: "Em Execução",
    tipoServico: "Corretiva",
    tipo: "Eletrico",
    atividade: "Troca de disjuntor geral",
    tecnico: "Fernando Pedro",
    dataAbertura: new Date(2026, 0, 23),
    dataFinalizado: new Date(2026, 0, 25),
    descricao: "Foi trocado 2 disjuntores",
    local: "Quadro Refeitorio QE-145",
    complexo: "Shopping",
    apoio: "Eduardo Perotti",
    prioridade: "Media",
    materiais: ["Disjuntor 20A  (2 unidades)"],
  },
  {
    os: "#CV-1254",
    status: "Finalizado",
    preStatus: "Em Execução",
    tipoServico: "Corretiva",
    tipo: "Civil",
    atividade: "Troca de pastilhas",
    tecnico: "Marcelo Mendes",
    dataAbertura: new Date(2026, 0, 12),
    dataFinalizado: new Date(2026, 0, 19),
    descricao: "Foram troca pastilhas encima do letreiro Colinas Eco Primo",
    local: "Estacionamento Primo",
    complexo: "Shopping",
    apoio: "Izais Silva - Fabio Carvalho",
    prioridade: "Alta",
    materiais: null,
  },
  {
    os: "#AT-0003",
    status: "Aberto",
    preStatus: null,
    tipoServico: "Acompanhamento",
    tipo: null,
    atividade: "Acompanhamento terceiro",
    tecnico: "Marcelo Mendes",
    dataAbertura: new Date(2026, 0, 12),
    dataFinalizado: null,
    descricao: "Acompanhamento empresa Vivo na loja NS-12",
    local: "Loja Ns-12",
    complexo: "Shopping",
    apoio: null,
    prioridade: "Baixa",
    materiais: null,
  },
];

export function CardOrdemService() {
  return (
    <Card className="border-gray-400/40 mt-6">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className={`hover:bg-transparent ${color.textBranco}`}>
              <TableHead className="">OS</TableHead>
              <TableHead className="">Tipo serviço</TableHead>
              <TableHead>Serviço / Local</TableHead>
              <TableHead>Categoria / Técnico</TableHead>
              <TableHead>Status / Data Abertura</TableHead>
              <TableHead>Prioridade</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listAtividades.map((iten) => {
              const config =
                statusConfig[iten.status as keyof typeof statusConfig];
              if (!config) return null; // proteção mínima

              return (
                <TableRow key={iten.os} className="group">
                  <TableCell
                    className={`font-medium ${color.textTertiary} hover:text-white cursor-pointer transition`}
                  >
                    {iten.os}
                  </TableCell>
                  <TableCell
                    className={`${iten.tipoServico === "Corretiva" ? `${color.textIconMarron}` : iten.tipoServico === "Melhoria" ? `${color.textIconVerde}` : `${color.textIconAzulClaro}`}`}
                  >
                    {iten.tipoServico}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="truncate font-medium text-sm">
                        {iten.atividade}
                      </span>
                      <span className="text-xs text-slate-500 truncate">
                        {iten.complexo} - {iten.local}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span
                        className={`px-2 py-1 rounded-lg text-xs w-fit ${
                          iten.tipo === "Eletrico"
                            ? `${color.textIconAmarelo} ${color.bgIconAmarelo}`
                            : iten.tipo === "Refrigeração"
                              ? `${color.textIconAzulClaro} ${color.bgIconAzulClaro}`
                              : iten.tipo === "Civil"
                                ? `${color.textIconMarron} ${color.bgIconMarron}`
                                : ``
                        }`}
                      >
                        {iten.tipo ? iten.tipo : "N/A"}
                      </span>
                      <span className="text-xs text-slate-500 italic">
                        {iten.tecnico}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <Badge
                        className={`px-3 py-1 rounded-full text-xs ${config.text} ${config.bg}`}
                      >
                        {iten.status}
                      </Badge>
                      <span className="text-xs  italic">
                        {formatarData(iten.dataAbertura)}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 rounded-full ${iten.prioridade === "Alta" ? "bg-[#D16163]" : iten.prioridade === "Media" ? "bg-[#D1AC18]" : "bg-[#38A566]"} `}
                      ></div>
                      <span>{iten.prioridade}</span>
                    </div>
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
                          <Eye size={14} /> Visualizar Detalhes
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 cursor-pointer ">
                          <Pencil size={14} /> Editar OS
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 cursor-pointer ">
                          <Trash2 size={14} /> Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
