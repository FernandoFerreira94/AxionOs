import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { color } from "@/src/app/styles/color";
import { Calendar } from "lucide-react";
import { MonthYearPicker } from "./MonthYearPicker";
export function CardMonth() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={`flex items-center gap-2 ${color.textBranco}`}>
          <Calendar size={26} className={`${color.textIconAzul}`} />
          Seleciona o Mês e ano
        </CardTitle>
      </CardHeader>
      <CardContent>
        <MonthYearPicker />
      </CardContent>
    </Card>
  );
}
