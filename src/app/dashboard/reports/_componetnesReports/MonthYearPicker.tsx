"use client";

import * as React from "react";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { color } from "@/src/app/styles/color";
import { cn } from "@/lib/utils";

export function MonthYearPicker() {
  const [date, setDate] = React.useState<{ month: string; year: string }>({
    month: new Date().getMonth().toString(),
    year: new Date().getFullYear().toString(),
  });

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  // Gera uma lista de anos (ex: 5 anos atrás até 5 anos no futuro)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, i) =>
    (currentYear - 5 + i).toString(),
  );

  console.log(date);

  return (
    <div className="flex items-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              `w-[220px] justify-start text-left font-normal border border-gray-600/40 hover:border-gray-400/40  ${color.bgMain} hover:${color.bgMain} transition-all `,
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
            <span className={`text-gray-300 flex items-center  w-full`}>
              {months[parseInt(date.month)]} de {date.year}{" "}
              <Search size={16} className="ml-auto" />
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={`w-auto p-4  border border-gray-900 ${color.bgMain}`}
          align="start"
        >
          <div className="flex gap-2">
            {/* Seleção de Mês */}
            <Select
              value={date.month}
              onValueChange={(v) => setDate((prev) => ({ ...prev, month: v }))}
            >
              <SelectTrigger className="w-[130px]  border-gray-700 text-slate-200 focus:ring-blue-500">
                <SelectValue placeholder="Mês" />
              </SelectTrigger>
              <SelectContent
                className={` border-gray-800 text-slate-300 ${color.bgMain}`}
              >
                {months.map((m, i) => (
                  <SelectItem
                    key={m}
                    value={i.toString()}
                    className=" text-slate-300 cursor-pointer"
                  >
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Seleção de Ano */}
            <Select
              value={date.year}
              onValueChange={(v) => setDate((prev) => ({ ...prev, year: v }))}
            >
              <SelectTrigger className="w-[100px] bg-transparent border-gray-700 text-slate-200 focus:ring-blue-500">
                <SelectValue placeholder="Ano" />
              </SelectTrigger>
              <SelectContent
                className={` border-gray-800 text-slate-300 ${color.bgMain}`}
              >
                {years.map((y) => (
                  <SelectItem
                    key={y}
                    value={y}
                    className=" text-slate-300 cursor-pointer"
                  >
                    {y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
