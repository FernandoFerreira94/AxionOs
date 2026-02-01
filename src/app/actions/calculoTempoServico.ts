export function calcularTempoPermanencia(
  dataContratacao: Date,
  dataSaida?: Date | null,
): string {
  const inicio = new Date(dataContratacao);
  const fim = dataSaida ? new Date(dataSaida) : new Date();

  let anos = fim.getFullYear() - inicio.getFullYear();
  let meses = fim.getMonth() - inicio.getMonth();
  let dias = fim.getDate() - inicio.getDate();

  // Ajuste se o dia atual for menor que o dia de início
  if (dias < 0) {
    meses--;
    const ultimoDiaMesAnterior = new Date(
      fim.getFullYear(),
      fim.getMonth(),
      0,
    ).getDate();
    dias += ultimoDiaMesAnterior;
  }

  // Ajuste se o mês atual for menor que o mês de início
  if (meses < 0) {
    anos--;
    meses += 12;
  }

  // Formatação da string de retorno
  const partes = [];
  if (anos > 0) partes.push(`${anos} ${anos === 1 ? "ano" : "anos"}`);
  if (meses > 0) partes.push(`${meses} ${meses === 1 ? "mês" : "meses"}`);

  // Se for menos de um mês, mostra os dias
  if (anos === 0 && meses === 0) {
    if (dias <= 0) return "Iniciou hoje";
    partes.push(`${dias} ${dias === 1 ? "dia" : "dias"}`);
  }

  return partes.join(" e ");
}
