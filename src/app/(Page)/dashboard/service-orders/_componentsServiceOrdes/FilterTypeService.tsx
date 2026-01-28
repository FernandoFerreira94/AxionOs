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
import { Typeservice } from "@/src/app/lib/type";

const statusOptions: Typeservice[] = [
  "All",
  "Corretiva",
  "Melhoria",
  "Acompanhamento",
] as const;

export function FilterTypeService() {
  const [categoriaFilter, setCategoriaFilter] = useState<Typeservice>("All");
  const handleValueChange = (value: Typeservice | null) => {
    if (value === null) {
      setCategoriaFilter("All");
    } else {
      setCategoriaFilter(value);
    }
  };
  console.log(categoriaFilter);
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-sm font-medium">Tipo de Serviço</Label>

      {/* 3. Passar o valor e a função de mudança para o Combobox */}
      <Combobox
        value={categoriaFilter}
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
