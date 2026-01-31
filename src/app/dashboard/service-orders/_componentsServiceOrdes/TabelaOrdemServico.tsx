import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  CalendarRange,
  ClipboardList,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { OrdenservicoProps } from "@/src/app/lib/type";
import { color } from "@/src/app/styles/color";
import { statusConfig } from "@/src/app/utils/statusConfig";
import { formatarData } from "@/src/app/actions/formatarData";
import { BadgeTipoServico } from "@/components/layoute/BadgeTipoServico";
import { BadgeStatus } from "@/components/layoute/BadgeStatus";
import { BadgeFuncao } from "@/components/layoute/BadgeFuncao";
import { BadgePrioridade } from "@/components/layoute/BadgePrioridade";

const listAtividades: OrdenservicoProps[] = [
  {
    os: "#AC-1023",
    status: "Em Execução",
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
    status: "Material",

    tipoServico: "Melhoria",
    tipo: "Eletrica",
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
    status: "Fiscalização",

    tipoServico: "Corretiva",
    tipo: "Eletrica",
    atividade: "Troca de disjuntor geral",
    tecnico: "Fernando Pedro",
    dataAbertura: new Date(2026, 0, 23),
    dataFinalizado: new Date(2026, 0, 25),
    descricao: "Foi trocado 2 disjuntores",
    local: "Quadro Refeitorio QE-145",
    complexo: "Shopping",
    apoio: ["Fabio Carvalho", "Izais Silva"],
    prioridade: "Media",
    materiais: ["Disjuntor 20A  (2 unidades)"],
  },
  {
    os: "#CV-1254",
    status: "Finalizado",

    tipoServico: "Corretiva",
    tipo: "Civil",
    atividade: "Troca de pastilhas",
    tecnico: "Marcelo Mendes",
    dataAbertura: new Date(2026, 0, 12),
    dataFinalizado: new Date(2026, 0, 19),
    descricao: "Foram troca pastilhas encima do letreiro Colinas Eco Primo",
    local: "Estacionamento Primo",
    complexo: "Shopping",
    apoio: ["Fabio Carvalho", "Izais Silva"],
    prioridade: "Alta",
    materiais: null,
  },
  {
    os: "#AT-0003",
    status: "Aberto",

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

export function TabelaOrdemServico() {
  return (
    <Card className="border-gray-400/40 mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ClipboardList
            size={30}
            className={`${color.textIconAmarelo} ${color.bgIconAmarelo} p-1.5 rounded-sm`}
          />
          <h2 className={`${color.textBranco}`}>Lista de Ordens de Servico</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className={` ${color.textBranco}`}>
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
                <TableRow
                  key={iten.os}
                  className={`group hover:bg-white/5  ${color.textTertiary} hover:${color.textBranco} cursor-pointer`}
                >
                  <TableCell className={`font-medium `}>{iten.os}</TableCell>
                  <TableCell>
                    <BadgeTipoServico tipo={iten.tipoServico} />
                  </TableCell>
                  <TableCell className="text-white">
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
                      <BadgeFuncao funcao={iten.tipo} />
                      <span className="text-xs text-slate-500 italic">
                        {iten.tecnico}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="flex flex-col gap-1 ">
                    <BadgeStatus status={iten.status} />
                    <span className="text-xs  italic ml-2 text-white">
                      {formatarData(iten.dataAbertura)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <BadgePrioridade prioridade={iten.prioridade} />
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
