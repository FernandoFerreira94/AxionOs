"use client";
import { useEffect, useState, useRef } from "react"; // 1. Adicionamos useRef
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { color } from "@/src/app/styles/color";
import { Search } from "lucide-react";

export function InputSerachMaterial({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [displayValue, setDisplayValue] = useState(value);
  const isFirstRender = useRef(true); // 2. Ref para controlar a primeira execução

  // Sincroniza o displayValue se o "value" mudar externamente (ex: botão limpar)
  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  useEffect(() => {
    // 3. SE for a primeira vez que o componente carrega, não faz nada
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // 4. Se o que está na tela é igual ao que já está no estado global, não dispara
    if (displayValue === value) return;

    const handler = setTimeout(() => {
      onChange(displayValue);
    }, 500);

    return () => clearTimeout(handler);
  }, [displayValue, onChange, value]); // Adicionamos 'value' aqui para comparação

  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-sm font-medium">Buscar Material</Label>
      <div className="relative">
        <Search
          className="absolute left-2.5 top-1/2 -translate-y-1/2 "
          size={16}
        />
        <Input
          placeholder="Digite o nome do material..."
          className={`pl-9 ${color.bgMain} border-gray-400/20 `}
          value={displayValue}
          onChange={(e) => setDisplayValue(e.target.value)}
        />
      </div>
    </div>
  );
}
