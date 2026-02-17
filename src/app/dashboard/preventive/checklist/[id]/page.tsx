import { HeaderDashboard } from "@/components/layoute/HeadeDashboard";

import { HeaderCheckList } from "./_componentes/HeaderCheckList";
import { PrioridadeProps } from "@/src/app/lib/type";
import { TableCheckList } from "./_componentes/TableCheckList";

interface InfoEquipamentoProps {
  id: string;
  nome: string;
  tag: string;
  categoria: string;
  prioridade: PrioridadeProps;
  tecnico: string;
  dataAgendamento: Date;
  dataInicio: Date;
  localizacao: string;
}

const infoEquipamento: InfoEquipamentoProps = {
  id: "EL-102",
  nome: "QGBT - Setor Shopping A",
  tag: "PE-001/26",
  categoria: "Eletrica",
  prioridade: "Alta",
  tecnico: "Eduardo Perotti",
  dataAgendamento: new Date(2026, 10, 2),
  dataInicio: new Date(2026, 10, 2),
  localizacao: "Subestação Principal",
};

export default function Checklist() {
  return (
    <main className="w-full min-h-screen flex flex-col px-8 max-sm:px-4 pb-8 overflow-y-auto bg-[#050505]">
      <HeaderDashboard
        titulo={`Checklist Preventivo: ${infoEquipamento.tag}`}
        subTitulo={`Execução técnica em painéis de média tensão`}
      />

      <div className="mt-6 space-y-6">
        <HeaderCheckList infoEquipamento={infoEquipamento} />

        <TableCheckList idOs={infoEquipamento.id} />
      </div>
    </main>
  );
}
