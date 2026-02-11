import { getIniciais } from "./getIniciaisName";

export function BadgeIniciais({ nomeCompleto }: { nomeCompleto: string }) {
  return (
    <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold border border-blue-500/20">
      {getIniciais(nomeCompleto)}
    </div>
  );
}
