import { color } from "@/src/app/styles/color";

export function ItemInfo({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | null;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className={`mt-0.5  ${color.textTertiary}`}>{icon}</div>
      <div className="">
        <p
          className={`text-[10px] uppercase font-bold leading-none mb-1 ${color.textTertiary}`}
        >
          {label}
        </p>
        <p className={`text-sm font-medium  ${color.textSecondary}`}>{value}</p>
      </div>
    </div>
  );
}
