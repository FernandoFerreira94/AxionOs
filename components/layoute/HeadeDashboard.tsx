import { color } from "@/src/app/styles/color";

interface Props {
  component?: React.ReactNode;
  titulo: string;
  subTitulo: string;
}

export function HeaderDashboard({ component, titulo, subTitulo }: Props) {
  return (
    <section className=" flex items-center justify-between py-4">
      <div className="flex flex-col gap-2">
        <h1 className={`text-3xl font-semibold ${color.textBranco}`}>
          {titulo}
        </h1>
        <p className={`text-sm ${color.textTertiary}`}>{subTitulo}</p>
      </div>
      <div>{component}</div>
    </section>
  );
}
