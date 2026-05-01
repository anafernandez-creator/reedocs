import { AppShell } from "@/components/AppShell";
import { ProcessTable } from "@/components/ProcessTable";
import { mockProcesses } from "@/lib/mockData";

export default function ProcessesPage(): JSX.Element {
  return (
    <AppShell>
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Processos</h1>
        <p className="text-sm text-reedocs-gray">Lista de processos com status, score e acesso rapido para analise.</p>
        <ProcessTable processes={mockProcesses} />
      </section>
    </AppShell>
  );
}
