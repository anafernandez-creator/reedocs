import { AlertTriangle, CheckCircle2, ClipboardList, FileStack } from "lucide-react";

import { AppShell } from "@/components/AppShell";
import { ProcessCard } from "@/components/ProcessCard";
import { ProcessTable } from "@/components/ProcessTable";
import { mockProcesses } from "@/lib/mockData";

export default function DashboardPage(): JSX.Element {
  const critical = mockProcesses.filter((item) => item.score < 70).length;

  const relevant = mockProcesses.filter(
    (item) => item.score >= 70 && item.score < 90
  ).length;

  const ok = mockProcesses.filter((item) => item.score >= 90).length;

  const review = mockProcesses.filter(
    (item) => item.status === "review"
  ).length;

  return (
    <AppShell>
      <section className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard Reedocs</h1>

          <p className="text-sm text-reedocs-gray">
            Identificação de divergências críticas em documentos de importação.
          </p>

          {critical > 0 && (
            <div className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-2">
              <p className="text-sm font-medium text-red-700">
                {critical} processos com risco operacional alto — revisar agora
              </p>
            </div>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <ProcessCard
            icon={FileStack}
            label="Erros críticos"
            helper="Processos com risco alto"
            value={critical}
          />

          <ProcessCard
            icon={AlertTriangle}
            label="Divergências relevantes"
            helper="Revisão recomendada"
            value={relevant}
          />

          <ProcessCard
            icon={CheckCircle2}
            label="Processos sem inconsistência"
            helper="Aptos para continuidade"
            value={ok}
          />

          <ProcessCard
            icon={ClipboardList}
            label="Aguardando revisão"
            helper="Aguardando análise"
            value={review}
          />
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Processos recentes</h2>
          <ProcessTable processes={mockProcesses} />
        </div>
      </section>
    </AppShell>
  );
}