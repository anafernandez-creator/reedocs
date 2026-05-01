import * as React from "react";

import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
}

export function Progress({ value, className, ...props }: ProgressProps): JSX.Element {
  return (
    <div className={cn("h-2 w-full rounded-full bg-muted", className)} {...props}>
      <div
        className="h-full rounded-full bg-reedocs-blue transition-all"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}
