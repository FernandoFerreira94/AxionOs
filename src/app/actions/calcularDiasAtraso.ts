export function calcularDiasAtraso(dataExecucao: Date): number {
  const hoje = new Date();

  // zera horas para evitar erro por fuso/horário
  hoje.setHours(0, 0, 0, 0);
  dataExecucao.setHours(0, 0, 0, 0);

  const diffEmMs = hoje.getTime() - dataExecucao.getTime();
  const diffEmDias = Math.floor(diffEmMs / (1000 * 60 * 60 * 24));

  return diffEmDias > 0 ? diffEmDias : 0;
}
