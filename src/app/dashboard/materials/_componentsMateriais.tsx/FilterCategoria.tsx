import { Label } from "@/components/ui/label";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

const statusOptions: string[] = [
  "Todos",
  "Elétrica",
  "Civil",
  "Refrigeração",
  "Hidraulica",
] as const;

interface FilterDepartamentoProps {
  value: string;
  onChange: (value: string) => void;
}

export function FilterCategoria({ value, onChange }: FilterDepartamentoProps) {
  const handleValueChange = (newVal: string | null) => {
    if (newVal) {
      onChange(newVal);
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-sm font-medium">Categoria</Label>

      {/* 3. Passar o valor e a função de mudança para o Combobox */}
      <Combobox
        value={value}
        onValueChange={handleValueChange}
        items={statusOptions}
      >
        <ComboboxInput
          placeholder="Select status..."
          readOnly
          // O valor exibido agora é controlado pelo estado
        />
        <ComboboxContent>
          <ComboboxEmpty>Não existe categorias.</ComboboxEmpty>
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
