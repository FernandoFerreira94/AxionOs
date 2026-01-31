export function formatarData(data: Date | null) {
  if (!data) return null;
  return data.toLocaleDateString("pt-BR");
}
