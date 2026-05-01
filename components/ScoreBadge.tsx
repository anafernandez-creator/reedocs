import { cn } from "@/lib/utils";

interface ScoreBadgeProps {
  score: number;
}

function getClassification(score: number): { label: string; className: string } {
  if (score >= 90) return { label: "Apto para continuidade", className: "bg-green-100 text-green-700" };
if (score >= 70) return { label: "Revisão recomendada", className: "bg-orange-100 text-orange-700" };
return { label: "Risco operacional", className: "bg-red-100 text-red-700" };
}

export function ScoreBadge({ score }: ScoreBadgeProps): JSX.Element {
  const classification = getClassification(score);
  return (
    <span className={cn("inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold", classification.className)}>
     {score}% → {classification.label}
    </span>
  );
}
