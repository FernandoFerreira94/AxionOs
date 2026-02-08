import { color } from "@/src/app/styles/color";

interface Props {
  component?: React.ReactNode;
  titulo: string;
  subTitulo: string;
}

export function HeaderDashboard({ component, titulo, subTitulo }: Props) {
  return (
    <section className=" flex items-center justify-between py-4 max-sm:flex-col max-sm:items-start max-sm:gap-4">
      <div className="flex flex-col gap-2">
        <h1
          className={`text-3xl max-sm:text-2xl font-semibold ${color.textBranco}`}
        >
          {titulo}
        </h1>
        <p className={`text-sm max-sm:text-sm ${color.textTertiary}`}>
          {subTitulo}
        </p>
      </div>
      {component && 
      <div className="max-sm:w-full">{component}</div>
      }
    </section>
  );
}
