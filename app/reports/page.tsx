import { Download, FileDown, ShieldCheck } from "lucide-react";

import { AppShell } from "@/components/AppShell";
import { ScoreBadge } from "@/components/ScoreBadge";
import { Button } from "@/components/ui/button";

export default function ReportsPage(): JSX.Element {
  return (
    <AppShell>
      <section className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Relatório executivo</h1>
          <p className="text-sm text-reedocs-gray">
            Resumo consolidado das validações, impactos e ações recomendadas.
          </p>
        </div>

        <div className="rounded-lg border bg-white p-6">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">PROC-2026-0004</h2>
              <p className="mt-1 text-sm text-reedocs-gray">
                Análise documental entre Commercial Invoice, Packing List e Bill of Lading.
              </p>
            </div>

            <ScoreBadge score={78} />
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-orange-300 bg-orange-100 p-4">
              <p className="font-semibold text-orange-800">
                Risco operacional moderado identificado
              </p>
              <p className="mt-1 text-sm text-orange-700">
                Este processo apresenta divergências que não impedem a continuidade imediata,
                mas aumentam o risco de exigências documentais e atrasos na liberação aduaneira.
              </p>
              <p className="mt-1 text-sm text-orange-700">
                Recomenda-se correção preventiva antes do registro da DI.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border bg-muted p-4">
                <p className="mb-2 font-semibold">Impacto operacional</p>
                <ul className="ml-5 list-disc space-y-1 text-sm text-reedocs-gray">
                  <li>Possível exigência documental pela Receita Federal</li>
                  <li>Aumento do tempo de desembaraço</li>
                  <li>Risco de inconsistência entre documentos comerciais</li>
                </ul>
              </div>

              <div className="rounded-lg border bg-muted p-4">
                <p className="mb-2 font-semibold">Plano de ação recomendado</p>
                <ol className="ml-5 list-decimal space-y-1 text-sm text-reedocs-gray">
                  <li>Confirmar e corrigir o peso bruto entre Invoice e Packing List</li>
                  <li>Validar consistência da razão social do importador no BL</li>
                  <li>Padronizar descrição da mercadoria conforme documento principal</li>
                </ol>
              </div>
            </div>

            <div className="rounded-lg border bg-white">
              <div className="border-b px-4 py-3">
                <h3 className="font-semibold">Divergências priorizadas</h3>
                <p className="text-sm text-reedocs-gray">
                  Itens que exigem ação antes da continuidade operacional.
                </p>
              </div>

              <div className="divide-y">
                <div className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold">Peso bruto divergente</p>
                      <p className="mt-1 text-sm text-reedocs-gray">
                        Pode gerar exigência documental ou canal amarelo.
                      </p>
                      <p className="mt-2 text-sm">
                        <strong>Ação:</strong> ajustar antes do registro da DI.
                      </p>
                    </div>
                    <span className="rounded-md bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                      Média
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold">Divergência na razão social do importador</p>
                      <p className="mt-1 text-sm text-reedocs-gray">
                        Pode gerar inconsistência documental com potencial de bloqueio.
                      </p>
                      <p className="mt-2 text-sm">
                        <strong>Ação:</strong> corrigir antes do desembaraço.
                      </p>
                    </div>
                    <span className="rounded-md bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                      Alta
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold">Descrição da mercadoria inconsistente</p>
                      <p className="mt-1 text-sm text-reedocs-gray">
                        Baixo impacto, mas pode gerar questionamento documental.
                      </p>
                      <p className="mt-2 text-sm">
                        <strong>Ação:</strong> padronizar conforme documento principal.
                      </p>
                    </div>
                    <span className="rounded-md bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      Baixa
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Gerar relatório PDF
              </Button>

              <Button variant="outline">
                <FileDown className="mr-2 h-4 w-4" />
                Exportar Excel
              </Button>

              <Button variant="outline">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Enviar para compliance
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}