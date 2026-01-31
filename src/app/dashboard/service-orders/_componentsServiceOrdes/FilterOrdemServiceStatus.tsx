import { Label } from "@radix-ui/react-label";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { StatusProps } from "@/src/app/lib/type";

const statusOptions: StatusProps[] = [
  "Todos",
  "Aberto",
  "Em Execução",
  "Material",
  "Fiscalização",
  "Finalizado",
] as const;

interface Props {
  value: StatusProps;
  onChange: (value: StatusProps) => void;
}

export function FIlterStatus({ value, onChange }: Props) {
  const handleValueChange = (newValue: StatusProps | null) => {
    if (newValue) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-sm font-medium">Status</Label>

      {/* 3. Passar o valor e a função de mudança para o Combobox */}
      <Combobox
        value={value}
        onValueChange={handleValueChange}
        items={statusOptions}
      >
        <ComboboxInput
          readOnly
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
