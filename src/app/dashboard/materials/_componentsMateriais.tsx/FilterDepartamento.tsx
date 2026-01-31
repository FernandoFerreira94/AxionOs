import { Label } from "@radix-ui/react-label";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { DepartamentoProps } from "@/src/app/lib/type";

const statusOptions: DepartamentoProps[] = [
  "Shopping Colinas",
  "Green Tower",
  "Empreedimento",
] as const;

interface FilterDepartamentoProps {
  value: DepartamentoProps;
  onChange: (value: DepartamentoProps) => void;
}

export function FilterDepartamento({
  value,
  onChange,
}: FilterDepartamentoProps) {
  const handleValueChange = (newVal: DepartamentoProps | null) => {
    if (newVal) {
      onChange(newVal);
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-sm font-medium">Departamento</Label>

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
