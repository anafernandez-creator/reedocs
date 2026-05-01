import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProcessCardProps {
  label: string;
  value: number;
  icon: LucideIcon;
  helper?: string;
}

export function ProcessCard({ label, value, icon: Icon, helper }: ProcessCardProps): JSX.Element {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium text-reedocs-gray">{label}</CardTitle>
        <Icon className="h-4 w-4 text-reedocs-blue" />
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold text-foreground">{value}</p>
        {helper ? <p className="mt-1 text-xs text-reedocs-gray">{helper}</p> : null}
      </CardContent>
    </Card>
  );
}
