import Link from "next/link";
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  Download,
  FileDown,
} from "lucide-react";

import { AppShell } from "@/components/AppShell";
import { ScoreBadge } from "@/components/ScoreBadge";
import { Button } from "@/components/ui/button";

export default function ProcessAnalysisPage(): JSX.Element {
  return (
    <AppShell>
      <section className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-sm text-reedocs-gray hover:text-reedocs-blue"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao dashboard
            </Link>

            <h1 className="mt-3 text-2xl font-semibold">
              Análise do processo PROC-2026-0006
            </h1>

            <p className="text-sm text-reedocs-gray">
              Validação documental entre Commercial Invoice, Packing List e Bill of Lading.
            </p>
          </div>

          <ScoreBadge score={62} />
        </div>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="font-semibold text-red-700">
            Risco operacional moderado identificado
          </p>
          <p className="mt-1 text-sm text-red-700">
            Este processo apresenta divergências que não impedem a continuidade imediata,
            mas aumentam o risco de exigências documentais e atrasos na liberação aduaneira.
          </p>
          <p className="mt-1 text-sm text-red-700">
            Recomenda-se correção preventiva antes do registro da DI.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border bg-white p-5">
            <p className="text-sm text-reedocs-gray">Importador</p>
            <p className="mt-2 font-semibold">Norte Logística SA</p>
          </div>

          <div className="rounded-lg border bg-white p-5">
            <p className="text-sm text-reedocs-gray">Documentos analisados</p>
            <p className="mt-2 font-semibold">Commercial Invoice, Packing List e BL</p>
          </div>

          <div className="rounded-lg border bg-white p-5">
            <p className="text-sm text-reedocs-gray">Impacto principal</p>
            <p className="mt-2 font-semibold text-red-700">
              Risco de bloqueio aduaneiro
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-white p-5">
            <p className="mb-2 font-semibold">Impacto operacional</p>
            <ul className="ml-5 list-disc space-y-1 text-sm text-reedocs-gray">
              <li>Possível exigência documental pela Receita Federal</li>
              <li>Risco de atraso no desembaraço</li>
              <li>Inconsistência entre documentos comerciais</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-white p-5">
            <p className="mb-2 font-semibold">Plano de ação recomendado</p>
            <ol className="ml-5 list-decimal space-y-1 text-sm text-reedocs-gray">
              <li>Confirmar e corrigir o peso bruto entre Invoice e Packing List</li>
              <li>Validar consistência da razão social do importador no BL</li>
              <li>Padronizar descrição da mercadoria conforme documento principal</li>
            </ol>
          </div>
        </div>

        <div className="rounded-lg border bg-white">
          <div className="border-b px-5 py-4">
            <h2 className="text-lg font-semibold">Divergências encontradas</h2>
            <p className="text-sm text-reedocs-gray">
              Campos que exigem conferência antes da continuidade operacional.
            </p>
          </div>

          <div className="divide-y">
            <div className="p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-1 h-5 w-5 text-red-600" />

                <div className="flex-1 space-y-4">
                  <div>
                    <p className="font-semibold">Peso bruto divergente</p>
                    <p className="text-sm text-reedocs-gray">
                      Divergência acima da tolerância configurada entre Invoice e Packing List.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-md bg-muted p-4">
                      <p className="text-xs font-semibold uppercase text-reedocs-gray">
                        Commercial Invoice
                      </p>
                      <p className="mt-2 text-lg font-semibold">1.250 kg</p>
                    </div>

                    <div className="rounded-md bg-muted p-4">
                      <p className="text-xs font-semibold uppercase text-reedocs-gray">
                        Packing List
                      </p>
                      <p className="mt-2 text-lg font-semibold">1.287 kg</p>
                    </div>
                  </div>

                  <div className="rounded-md border border-red-200 bg-red-50 p-4">
                    <p className="text-sm text-red-700">
                      Diferença identificada: <strong>2,96%</strong>. Tolerância configurada:{" "}
                      <strong>2%</strong>. Revisão recomendada antes da DI.
                    </p>
                  </div>

                  <div className="rounded-md bg-muted p-3">
                    <p className="text-xs font-semibold uppercase text-reedocs-gray">
                      Ação recomendada
                    </p>
                    <p className="mt-1 text-sm">
                      Revisar valor do peso bruto no Packing List e alinhar com Commercial Invoice antes do registro da DI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-1 h-5 w-5 text-orange-600" />

                <div className="flex-1 space-y-4">
                  <div>
                    <p className="font-semibold">Descrição da mercadoria requer revisão</p>
                    <p className="text-sm text-reedocs-gray">
                      Os documentos usam descrições semanticamente semelhantes, mas não idênticas.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-md bg-muted p-4">
                      <p className="text-xs font-semibold uppercase text-reedocs-gray">
                        Commercial Invoice
                      </p>
                      <p className="mt-2 font-semibold">Red wine bottles</p>
                    </div>

                    <div className="rounded-md bg-muted p-4">
                      <p className="text-xs font-semibold uppercase text-reedocs-gray">
                        Packing List
                      </p>
                      <p className="mt-2 font-semibold">Bottled wine</p>
                    </div>
                  </div>

                  <div className="rounded-md border border-orange-200 bg-orange-50 p-4">
                    <p className="text-sm text-orange-700">
                      A divergência não bloqueia automaticamente, mas exige conferência para evitar inconsistência documental.
                    </p>
                  </div>

                  <div className="rounded-md bg-muted p-3">
                    <p className="text-xs font-semibold uppercase text-reedocs-gray">
                      Ação recomendada
                    </p>
                    <p className="mt-1 text-sm">
                      Padronizar a descrição da mercadoria entre os documentos para evitar questionamentos na parametrização.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />

                <div>
                  <p className="font-semibold">Importador compatível</p>
                  <p className="text-sm text-reedocs-gray">
                    O importador identificado nos documentos analisados está consistente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
  <Button variant="outline">
    <FileDown className="mr-2 h-4 w-4" />
    Gerar Excel
  </Button>

  <Button variant="outline">
    <Download className="mr-2 h-4 w-4" />
    Gerar PDF
  </Button>

  <Button>
    Revisar divergências
  </Button>
</div>
      </section>
    </AppShell>
  );
}