import { AlertTriangle, CheckCircle2, ShieldAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ValidationResult } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ValidationCardProps {
  validation: ValidationResult;
}

const severityClass = {
  low: "bg-yellow-100 text-yellow-700",
  medium: "bg-orange-100 text-orange-700",
  high: "bg-red-100 text-red-700"
};

const statusClass = {
  passed: "bg-green-100 text-green-700",
  divergent: "bg-red-100 text-red-700",
  needs_review: "bg-orange-100 text-orange-700"
};

export function ValidationCard({ validation }: ValidationCardProps): JSX.Element {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {validation.status === "divergent" ? (
            <ShieldAlert className="h-4 w-4 text-red-600" />
          ) : validation.status === "needs_review" ? (
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          ) : (
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          )}
          <CardTitle className="text-sm">{validation.ruleName}</CardTitle>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className={cn("rounded-full px-2 py-1 font-semibold", severityClass[validation.severity])}>
            Severidade {validation.severity}
          </span>
          <span className={cn("rounded-full px-2 py-1 font-semibold", statusClass[validation.status])}>
            {validation.status}
          </span>
        </div>
      </CardHeader>
      <CardContent className="grid gap-3 text-sm md:grid-cols-2">
        <div>
          <p className="text-xs text-reedocs-gray">{validation.sourceDocument}</p>
          <p className="font-medium">{validation.sourceValue}</p>
        </div>
        <div>
          <p className="text-xs text-reedocs-gray">{validation.targetDocument}</p>
          <p className="font-medium">{validation.targetValue}</p>
        </div>
        <div>
          <p className="text-xs text-reedocs-gray">Diferenca</p>
          <p className="font-medium">{validation.difference}</p>
        </div>
        <div>
          <p className="text-xs text-reedocs-gray">Tolerancia</p>
          <p className="font-medium">{validation.tolerance}</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs text-reedocs-gray">Explicacao</p>
          <p>{validation.explanation}</p>
        </div>
        <div className="flex flex-wrap gap-2 md:col-span-2">
          <Button size="sm" variant="secondary" type="button">
            Confirmar divergencia
          </Button>
          <Button size="sm" variant="outline" type="button">
            Marcar como falso positivo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
