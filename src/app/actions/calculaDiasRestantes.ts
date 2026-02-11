// src/app/actions/calcularDiasRestantes.ts

export function calcularDiasRestantes(dataAlvo: Date | null): number | null {
  if (!dataAlvo) return null;

  // Criamos instâncias de data "limpas" (apenas dia, mês e ano)
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const dataPreve = new Date(dataAlvo);
  dataPreve.setHours(0, 0, 0, 0);

  // Diferença em milissegundos
  const diferencaTempo = dataPreve.getTime() - hoje.getTime();

  // Converte milissegundos para dias
  // 1 dia = 24h * 60min * 60seg * 1000ms
  const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

  return diferencaDias;
}
