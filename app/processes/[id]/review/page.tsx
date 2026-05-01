import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
// fix deploy

export default function ReviewPage(): JSX.Element {
  return (
    <AppShell>
      <section className="space-y-6">
        <div>
          <Link
            href="/processes/PROC-2026-0006"
            className="inline-flex items-center gap-2 text-sm text-reedocs-gray hover:text-reedocs-blue"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para análise
          </Link>

          <h1 className="mt-3 text-2xl font-semibold">
            Revisão humana do processo
          </h1>

          <p className="text-sm text-reedocs-gray">
            Confirme divergências, marque falsos positivos ou aceite exceções operacionais.
          </p>
        </div>

        <div className="rounded-lg border bg-white p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />

            <div>
              <h2 className="font-semibold">Revisão registrada</h2>
              <p className="mt-1 text-sm text-reedocs-gray">
                Esta tela representa a etapa de validação humana antes da geração do relatório final.
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <Button>Confirmar revisão</Button>
            <Button variant="outline">Marcar como exceção</Button>
          </div>
        </div>
      </section>
    </AppShell>
  );
}