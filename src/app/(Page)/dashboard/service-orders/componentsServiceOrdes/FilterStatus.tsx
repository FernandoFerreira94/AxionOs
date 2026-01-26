import { useState } from "react";
import { Label } from "@radix-ui/react-label";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { Especialidade, StatusProps } from "@/src/app/lib/type";

const statusOptions: StatusProps[] = [
  "All",
  "Aberto",
  "Em Execução",
  "Aguardando Material",
  "Aguardando Fiscalização",
  "Finalizado",
] as const;

export function FIlterStatus() {
  const [statusFiltro, setStatusFiltro] = useState<Especialidade>("All");
  const handleValueChange = (value: Especialidade | null) => {
    if (value === null) {
      setStatusFiltro("All"); // Se vier nulo, volta pro padrão "All"
    } else {
      setStatusFiltro(value);
    }
  };
  console.log(statusFiltro);
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-sm font-medium">Status</Label>

      {/* 3. Passar o valor e a função de mudança para o Combobox */}
      <Combobox
        value={statusFiltro}
        onValueChange={handleValueChange}
        items={statusOptions}
      >
        <ComboboxInput
          placeholder="Select status..."
          // O valor exibido agora é controlado pelo estado
        />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
