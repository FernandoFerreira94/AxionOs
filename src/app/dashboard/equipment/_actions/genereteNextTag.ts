import { EquipamentoProps } from "../_componentsEquipamentos/CreateEquipamento";

export const generateNextTag = (
  codigoSelecionado: string,
  equipamentosExistentes: EquipamentoProps[],
) => {
  if (!codigoSelecionado || codigoSelecionado === "OU") return "";

  // Adicionamos o "|| []" para garantir que, se for undefined, ele use um array vazio
  const listaSegura = equipamentosExistentes || [];

  const filtrados = listaSegura.filter((e) =>
    e.tag?.startsWith(`${codigoSelecionado}-`),
  );

  // Encontra o maior número atual
  let maiorNumero = 0;
  filtrados.forEach((item) => {
    // Pega o número após o hífen: "AR-02" -> 2
    const partes = item.tag.split("-");
    const num = parseInt(partes[1]);
    if (!isNaN(num) && num > maiorNumero) {
      maiorNumero = num;
    }
  });

  const proximoNumero = maiorNumero + 1;

  // Retorna formatado com zero à esquerda (01, 02...)
  return `${proximoNumero.toString().padStart(2, "0")}`;
};
