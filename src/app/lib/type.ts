import { statusConfig } from "../utils/statusConfig";

export interface FiltersMateriais {
  departamento: DepartamentoProps;
  categoria: string;
  busca: string;
}

export interface TabelaMaterialProps {
  codigo: string;
  descricao: string;
  despartamento: string;
  marca: string | null;
  categoria: string;
  quantidade: string;
  unidade: string;
}

export interface FilterProps {
  value: string;
  onChange: (value: string) => void;
}
export type MaterialDetail = {
  material: string;
  qtd: number;
};

export type PrioridadeProps = "Alta" | "Media" | "Baixa";

export type CategoriaProps =
  | "Refrigeração"
  | "Eletrica"
  | "Civil"
  | "Hidraulica"
  | "Todos"
  | null;

export type StatusProps =
  | "Todos"
  | "Aberto"
  | "Em Execução"
  | "Material"
  | "Fiscalização"
  | "Finalizado"
  | null;

export type TipoServicoProps =
  | "Todos"
  | "Corretiva"
  | "Melhoria"
  | "Acompanhamento"
  | null;

export type FilterEquipamentosProps =
  | "Todos"
  | "Eletrica"
  | "Refrigeração"
  | "Ativo"
  | "Desativado";

export interface ApoioTencinoProps {
  id: string;
  name: string;
}

export type DepartamentoProps =
  | "Shopping Colinas"
  | "Green Tower"
  | "Empreedimento";

type TipoServico = "Corretiva" | "Melhoria" | "Acompanhamento";

export interface OrdenservicoProps {
  os: string;
  status: keyof typeof statusConfig;
  tipoServico: TipoServico;
  tipo: CategoriaProps;
  atividade: string;
  tecnico: string;
  dataAbertura: Date;
  dataFinalizado?: Date | null;
  descricao: string;
  local: string;
  complexo: string;
  apoio?: (string | ApoioTencinoProps)[] | null;
  prioridade: "Alta" | "Media" | "Baixa";
  materiais?: (string | MaterialDetail)[] | null;
}

export type FilterPreventivasProps = "Todos" | "Vencidas" | "Finalizadas";
