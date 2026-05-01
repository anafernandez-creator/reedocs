import Link from "next/link";

import { ScoreBadge } from "@/components/ScoreBadge";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Process } from "@/lib/types";

interface ProcessTableProps {
  processes: Process[];
}

export function ProcessTable({ processes }: ProcessTableProps): JSX.Element {
  if (!processes.length) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-white p-10 text-center">
        <p className="text-sm text-reedocs-gray">
          Nenhum processo encontrado. Crie seu primeiro processo para iniciar.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted text-xs uppercase text-reedocs-gray">
          <tr>
            <th className="px-4 py-3">Referência</th>
            <th className="px-4 py-3">Importador</th>
            <th className="px-4 py-3">Documentos</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Impacto</th>
            <th className="px-4 py-3">Data</th>
            <th className="px-4 py-3">Ação</th>
          </tr>
        </thead>

        <tbody>
          {processes.map((process) => (
            <tr key={process.id} className="border-t border-border">
              <td className="px-4 py-3 font-semibold text-reedocs-blue">
                {process.reference}
              </td>

              <td className="px-4 py-3">{process.importer}</td>

              <td className="px-4 py-3 text-center">{process.documentsCount}</td>

              <td className="px-4 py-3">
                <StatusBadge status={process.status} />
              </td>

              <td className="px-4 py-3">
                <div className="flex flex-col items-start gap-2">
                  <ScoreBadge score={process.score} />
                  <span className="text-sm text-reedocs-gray">
                    {process.score >= 90 && "Sem impacto identificado"}
                    {process.score >= 70 &&
                      process.score < 90 &&
                      "Revisão recomendada antes da DI"}
                    {process.score < 70 && "Risco de bloqueio aduaneiro"}
                  </span>
                </div>
              </td>

              <td className="px-4 py-3">{process.createdAt}</td>

              <td className="px-4 py-3">
               <Button asChild size="sm" variant="default">
  <Link href={`/processes/${process.id}`}>
    Revisar divergências
  </Link>
</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}