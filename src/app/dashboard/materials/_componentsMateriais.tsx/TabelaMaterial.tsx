import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { color } from "@/src/app/styles/color";

import { Package } from "lucide-react";

const infoMaterial = [
  {
    codigo: "EL-1245",
    descricao: "Luminario quadrada 18W 3000K",
    despartamento: "Shopping Colinas",
    marca: "Avant",
    categoria: "Eletrica",
    quantidade: "23",
    unidade: "Un",
  },
  {
    codigo: "HL-4578",
    descricao: "Registro 50mm esfera",
    despartamento: "Shopping Colinas",
    marca: "Tigre",
    categoria: "Hidraulica",
    quantidade: "2",
    unidade: "Un",
  },
  {
    codigo: "AR-4578",
    descricao: "Gás R22 1kg",
    despartamento: "Shopping Colinas",
    marca: "Chermours",
    categoria: "Hidraulica",
    quantidade: "3",
    unidade: "Un",
  },
  {
    codigo: "EL-4578",
    descricao: "Fita led pisca pisca Natal",
    despartamento: "Shopping Colinas",
    marca: null,
    categoria: "Eletrica",
    quantidade: "30",
    unidade: "Mts",
  },
  {
    codigo: "EL-1123",
    descricao: "Fita isolante preta 3mm",
    marca: "3M",
    despartamento: "Shopping Colinas",
    categoria: "Eletrica",
    quantidade: "30",
    unidade: "Mts",
  },
  {
    codigo: "EL-1123",
    descricao: "Fita isolante preta 3mm",
    marca: "3M",
    despartamento: "Shopping Colinas",
    categoria: "Eletrica",
    quantidade: "30",
    unidade: "Mts",
  },
  {
    codigo: "EL-1123",
    descricao: "Fita isolante preta 3mm",
    marca: "3M",
    despartamento: "Shopping Colinas",
    categoria: "Eletrica",
    quantidade: "30",
    unidade: "Mts",
  },
  {
    codigo: "EL-1123",
    descricao: "Fita isolante preta 3mm",
    marca: "3M",
    despartamento: "Shopping Colinas",
    categoria: "Eletrica",
    quantidade: "30",
    unidade: "Mts",
  },
  {
    codigo: "EL-1123",
    descricao: "Fita isolante preta 3mm",
    marca: "3M",
    despartamento: "Shopping Colinas",
    categoria: "Eletrica",
    quantidade: "30",
    unidade: "Mts",
  },
];

export function TabelaMaterial() {
  return (
    <ScrollArea className="h-150 w-full ">
      <Card className="border-gray-400/40 ">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package
              size={30}
              className={`${color.textIconMarron} ${color.bgIconMarron} p-1.5 rounded-sm`}
            />
            <h2 className={`${color.textBranco}`}>
              Lista de material em estoque
            </h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Codigo</TableHead>
                <TableHead>Descrição / Marca</TableHead>
                <TableHead>Departamento / Categoria</TableHead>
                <TableHead>Qtd / Un</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {infoMaterial.map((iten) => (
                <TableRow key={iten.codigo}>
                  <TableCell>{iten.codigo}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{iten.descricao}</span>
                      <span>{iten.marca}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>{iten.despartamento}</span>
                        <span>{iten.categoria}</span>
                      </div>
                    </TableCell>
                  </TableCell>
                  <TableCell>
                    <TableCell>
                      <div className="flex flex-col justify-center items-center">
                        <span>{iten.quantidade}</span>
                        <span>{iten.unidade}</span>
                      </div>
                    </TableCell>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </ScrollArea>
  );
}
