import { color } from "@/src/app/styles/color";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TriangleAlert, Timer } from "lucide-react";
import { formatarData } from "@/src/app/actions/formatarData";
import { calcularDiasAtraso } from "@/src/app/actions/calcularDiasAtraso";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Preventiva {
  equipamento: string;
  local: string;
  tipo: "Eletrico" | "Refrigeração";
  dataExecucao: Date;
  prioridade: "Alta" | "Media" | "Baixa";
}

const listPreventivas: Preventiva[] = [
  {
    equipamento: "Gerador Shopping",
    local: "Doca",
    tipo: "Eletrico",
    dataExecucao: new Date(2026, 0, 19),
    prioridade: "Alta",
  },
  {
    equipamento: "Ar-Condicionado",
    local: "Qto 04",
    tipo: "Refrigeração",
    dataExecucao: new Date(2026, 0, 8),
    prioridade: "Media",
  },
  {
    equipamento: "Painel eletrico",
    local: "Almoxerifado",
    tipo: "Eletrico",
    dataExecucao: new Date(2026, 0, 22),
    prioridade: "Baixa",
  },
];

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export default function SectionPreventivas() {
  return (
    <>
    <Card className="border-gray-400/40">
      <CardHeader className="">
        <CardTitle className="flex items-center gap-2">
          <TriangleAlert
            size={30}
            className={`${color.textIconVermelho} ${color.bgIconVermelho} p-1.5 rounded-sm`}
            />{" "}
          <h2 className={`${color.textBranco}`}>Preventivas Vencidas</h2>
        </CardTitle>
        <CardDescription className="hidden">
          Nenhuma preventiva vencida
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table >
      <TableCaption>Tabela de preventivas</TableCaption>
      <TableHeader >
        <TableRow className={`${color.textTertiary}`}>
          <TableHead >Equipamento</TableHead>
          <TableHead>Departamento</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Atraso (dias)</TableHead>
          <TableHead>Prioridade</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listPreventivas.map((iten) => (
          <TableRow key={iten.equipamento}>
            <TableCell className="font-medium">{iten.equipamento} - {iten.local}</TableCell>
            <TableCell  >
                  <span className={`px-2 py-1 rounded-lg  ${
                  iten.tipo === "Eletrico"
                  ? `${color.textIconAmarelo} ${color.bgIconAmarelo}`
                  : `${color.textIconAzulClaro} ${color.bgIconAzulClaro}`
                }`}>{iten.tipo}</span></TableCell>
            <TableCell>{formatarData(iten.dataExecucao)}</TableCell>
            <TableCell className={`flex items-center gap-2 ${calcularDiasAtraso(iten.dataExecucao) <= 2 ? color.textIconVerde : calcularDiasAtraso(iten.dataExecucao) <= 5 ? color.textIconAmarelo : color.textIconVermelho} `}
                >
                  <Timer size={20} />{" "} {calcularDiasAtraso(iten.dataExecucao)} dias</TableCell>
            <TableCell >   
              <div className="flex items-center gap-2">

              <div
                  className={`w-4 h-4 rounded-full ${iten.prioridade === "Alta" ? "bg-[#D16163]" : iten.prioridade === "Media" ? "bg-[#D1AC18]" : "bg-[#38A566]"} `}
                  ></div>
                  <span>{iten.prioridade}</span>
                  </div>
                  </TableCell>
          </TableRow>
        ))}
      </TableBody>
  
    </Table>
      </CardContent>
    </Card>

     
        </>
  );
}
