import { Card, CardContent } from "@/components/ui/card";
import { FilterFuncionariosProps } from "../page";

import { color } from "@/src/app/styles/color";
import { FilterAtivoFuncionarios } from "./FilterAtiveFuncionarios";
import { InputSerachFuncionarios } from "./inputSerachFuncionarios";

interface Props {
  filters: FilterFuncionariosProps;
  setFilters: React.Dispatch<React.SetStateAction<FilterFuncionariosProps>>;
}

export function CardFilterFuncionarios({ filters, setFilters }: Props) {
  return (
    <Card className={`border-gray-400/10 ${color.textSecondary} mt-6`}>
      <CardContent>
        <section className="grid grid-cols-2 gap-6 items-center">
          <InputSerachFuncionarios
            value={filters.busca}
            onChange={(val) => setFilters((prev) => ({ ...prev, busca: val }))}
          />
          <FilterAtivoFuncionarios
            value={filters.ativos}
            onChange={(val) => setFilters((prev) => ({ ...prev, ativos: val }))}
          />
        </section>
      </CardContent>
    </Card>
  );
}
