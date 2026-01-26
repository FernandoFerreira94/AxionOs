import { statusConfig } from "../utils/statusConfig";

export type MaterialDetail = {
  material: string;
  qtd: number;
};

export type Especialidade =
  | "Refrigeração"
  | "Eletrico"
  | "Civil"
  | "All"
  | null;

export type StatusProps =
  | "All"
  | "Aberto"
  | "Em Execução"
  | "Aguardando Material"
  | "Aguardando Fiscalização"
  | "Finalizado"
  | null;

export type Typeservice =
  | "All"
  | "Corretiva"
  | "Melhoria"
  | "Acompanhamento"
  | null;

export interface PropsOrdenservico {
  os: string;
  status: keyof typeof statusConfig;
  preStatus?: keyof typeof statusConfig | null;
  tipoServico: "Corretiva" | "Melhoria" | "Acompanhamento";
  tipo: Especialidade;
  atividade: string;
  tecnico: string;
  dataAbertura: Date;
  dataFinalizado?: Date | null;
  descricao: string;
  local: string;
  complexo: string;
  apoio: string | null;
  prioridade: "Alta" | "Media" | "Baixa";
  materiais?: (string | MaterialDetail)[] | null;
}
