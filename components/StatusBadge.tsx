import { ProcessStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: ProcessStatus;
}

const map = {
  validated: { label: "Validado", className: "bg-green-100 text-green-700" },
  divergence: { label: "Com divergencia", className: "bg-orange-100 text-orange-700" },
  review: { label: "Aguardando revisao", className: "bg-red-100 text-red-700" },
  processing: { label: "Em processamento", className: "bg-blue-100 text-blue-700" }
};

export function StatusBadge({ status }: StatusBadgeProps): JSX.Element {
  const item = map[status];
  return <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", item.className)}>{item.label}</span>;
}
