export function getIniciais(nomeCompleto: string): string {
  if (!nomeCompleto) return "";

  // Divide o nome por espaços e remove espaços extras
  const nomes = nomeCompleto.trim().split(/\s+/);

  // Pega a primeira letra do primeiro nome
  const primeiraSigla = nomes[0]?.[0] || "";

  // Pega a primeira letra do último nome (se houver mais de um nome)
  const segundaSigla = nomes.length > 1 ? nomes[nomes.length - 1][0] : "";

  // Retorna as siglas juntas em caixa alta
  return (primeiraSigla + segundaSigla).toUpperCase();
}
